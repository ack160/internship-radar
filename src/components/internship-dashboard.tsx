"use client";

import { useMemo, useState, useEffect } from "react";
import { allTags, internships as seedInternships, type Internship } from "@/lib/seed-data";
import supabase from "@/lib/supabase";

function formatStatus(status: Internship["status"]) {
  if (status === "verified_open") return "Verified open";
  if (status === "likely_open") return "Likely open";
  return "Needs review";
}

function statusClass(status: Internship["status"]) {
  if (status === "verified_open") return "status status-open";
  if (status === "likely_open") return "status status-likely";
  return "status status-review";
}

export function InternshipDashboard() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [level, setLevel] = useState("All");
  const [watchedCompanies, setWatchedCompanies] = useState<string[]>([
    "Google",
    "Microsoft",
    "NVIDIA",
  ]);

  const [dataInternships, setDataInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const { data, error } = await supabase
          .from("internships")
          .select(
            `id,title,location,status,tags,level,source,apply_url,first_seen,last_checked,summary,companies(name,careers_url,linkedin_search_template)`,
          );
         console.log("DATA:", data);
         console.log("ERROR:", error);
        if (error || !data) throw error ?? new Error("No data returned");

        const mapped = (data as any[]).map((r) => {
          const companyObj = Array.isArray(r.companies) ? r.companies[0] : r.companies ?? null;
          const companyName = companyObj?.name ?? r.company ?? "Unknown";
          const alumniTemplate = companyObj?.linkedin_search_template ?? "";
          const alumniSearch = alumniTemplate
            ? alumniTemplate.replace("{company}", companyName)
            : `Rutgers ${companyName} software engineer`;

          return {
            id: r.id ?? `${companyName}-${r.title}`,
            company: companyName,
            title: r.title ?? "",
            location: r.location ?? "",
            status: (r.status as Internship["status"]) ?? "needs_review",
            tags: r.tags ?? [],
            level: r.level ?? "Unknown",
            source: r.source ?? "",
            applyUrl: r.apply_url ?? r.applyUrl ?? "#",
            firstSeen: r.first_seen ?? r.firstSeen ?? "",
            lastChecked: r.last_checked ?? r.lastChecked ?? "",
            summary: r.summary ?? "",
            alumniSearch,
          } as Internship;
        });

        if (mounted) setDataInternships(mapped);
      } catch (err) {
        if (mounted) setDataInternships([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

const filteredInternships = dataInternships.filter((internship) => {
  const normalizedQuery = query.trim().toLowerCase();

  const matchesQuery =
    normalizedQuery.length === 0 ||
    [internship.company, internship.title, internship.location, internship.summary]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);

  const matchesTag = tag === "All" || internship.tags.includes(tag);
  const matchesLevel = level === "All" || internship.level === level;

  return matchesQuery && matchesTag && matchesLevel;
});

  const openCount = dataInternships.filter(
    (internship) => internship.status === "verified_open",
  ).length;
  const underclassmenCount = dataInternships.filter((internship) =>
    internship.tags.includes("Underclassmen"),
  ).length;

  function toggleWatch(company: string) {
    setWatchedCompanies((current) =>
      current.includes(company)
        ? current.filter((item) => item !== company)
        : [...current, company].sort(),
    );
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">
          <h1>Internship Radar</h1>
          <p>Track elite tech internships before the application wave gets crowded.</p>
        </div>
        <a className="button button-secondary" href="#roles">
          Browse roles
        </a>
      </header>

      <section className="summary-grid" aria-label="Dashboard summary">
        <div className="metric">
          <span>Tracked roles</span>
          <strong>{dataInternships.length}</strong>
        </div>
        <div className="metric">
          <span>Verified open</span>
          <strong>{openCount}</strong>
        </div>
        <div className="metric">
          <span>Underclassmen</span>
          <strong>{underclassmenCount}</strong>
        </div>
        <div className="metric">
          <span>Watchlist</span>
          <strong>{watchedCompanies.length}</strong>
        </div>
      </section>

      <section className="toolbar" aria-label="Internship filters">
        <input
          className="control"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by company, role, location, or keyword"
          value={query}
        />
        <select
          className="control"
          onChange={(event) => setTag(event.target.value)}
          value={tag}
        >
          <option value="All">All tags</option>
          {allTags.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          className="control"
          onChange={(event) => setLevel(event.target.value)}
          value={level}
        >
          <option value="All">All levels</option>
          <option value="Freshman/Sophomore">Freshman/Sophomore</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Junior">Junior</option>
          <option value="Graduate">Graduate</option>
          <option value="Unknown">Unknown</option>
        </select>
      </section>

      <div className="content-grid">
        <section id="roles" className="role-list" aria-label="Internship roles">
              {loading ? (
                <div className="empty-state">Loading internships...</div>
              ) : filteredInternships.length === 0 ? (
            <div className="empty-state">No internships match those filters yet.</div>
          ) : (
            filteredInternships.map((internship) => {
              const isWatched = watchedCompanies.includes(internship.company);
              return (
                <article className="role-card" key={internship.id}>
                  <div className="role-header">
                    <div className="role-title">
                      <h2>{internship.title}</h2>
                      <p>
                        {internship.company} · {internship.location}
                      </p>
                    </div>
                    <span className={statusClass(internship.status)}>
                      {formatStatus(internship.status)}
                    </span>
                  </div>

                  <p>{internship.summary}</p>

                  <div className="tag-row">
                    {internship.tags.map((item) => (
                      <span className="tag" key={`${internship.id}-${item}`}>
                        {item}
                      </span>
                    ))}
                  </div>

                    <div className="role-meta">
                      <span>Level: {internship.level}</span>
                      <span>First seen: {internship.firstSeen}</span>
                      <span>Last checked: {internship.lastChecked}</span>
                      <span>Source: {internship.source}</span>
                    </div>

                  <div className="role-actions">
                    <a className="button" href={internship.applyUrl} target="_blank">
                      Apply source
                    </a>
                    <button
                      className="button button-secondary"
                      onClick={() => toggleWatch(internship.company)}
                      type="button"
                    >
                      {isWatched ? "Watching" : "Watch company"}
                    </button>
                    <a
                      className="button button-secondary"
                      href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(
                        internship.alumniSearch,
                      )}`}
                      target="_blank"
                    >
                      Alumni search
                    </a>
                  </div>
                </article>
              );
            })
          )}
        </section>

        <aside className="side-panel" aria-label="Watchlist">
          <div>
            <h2>Company watchlist</h2>
            <p>
              V1 stores this in browser state. Next step is Supabase so users can
              save watchlists and receive email alerts.
            </p>
          </div>

          <div className="watch-list">
            {watchedCompanies.map((company) => {
              const companyRoles = dataInternships.filter(
                (internship) => internship.company === company,
              );
              return (
                <div className="watch-item" key={company}>
                  <strong>{company}</strong>
                  <span>{companyRoles.length} tracked role source</span>
                  <span>
                    LinkedIn tip: search "{company} software engineer" with your
                    college name.
                  </span>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}
