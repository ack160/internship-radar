(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/internship-radar/src/lib/seed-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allTags",
    ()=>allTags,
    "internships",
    ()=>internships
]);
const internships = [
    {
        id: "google-swe-2027",
        company: "Google",
        title: "Software Engineering Intern, Summer 2027",
        location: "Mountain View, CA / New York, NY",
        status: "needs_review",
        tags: [
            "SWE",
            "AI/ML",
            "Underclassmen",
            "Big Tech"
        ],
        level: "Undergraduate",
        source: "Company careers page",
        applyUrl: "https://www.google.com/about/careers/applications/",
        firstSeen: "2026-06-20",
        lastChecked: "2026-06-20",
        summary: "Placeholder posting used for the V1 dashboard. In production, this card will be created from daily source checks and AI classification.",
        alumniSearch: "Rutgers Google software engineer"
    },
    {
        id: "microsoft-explore-2027",
        company: "Microsoft",
        title: "Explore / Discovery Program",
        location: "Redmond, WA",
        status: "likely_open",
        tags: [
            "Underclassmen",
            "SWE",
            "PM",
            "Big Tech"
        ],
        level: "Freshman/Sophomore",
        source: "Early careers page",
        applyUrl: "https://careers.microsoft.com/",
        firstSeen: "2026-06-19",
        lastChecked: "2026-06-20",
        summary: "Underclassmen-oriented program to watch closely. The final app should flag this for first-year and second-year students.",
        alumniSearch: "Rutgers Microsoft software engineer"
    },
    {
        id: "nvidia-ignite-2027",
        company: "NVIDIA",
        title: "Ignite Intern Program",
        location: "Santa Clara, CA",
        status: "likely_open",
        tags: [
            "Underclassmen",
            "AI Infra",
            "Systems",
            "Hardware"
        ],
        level: "Freshman/Sophomore",
        source: "University recruiting page",
        applyUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/",
        firstSeen: "2026-06-18",
        lastChecked: "2026-06-20",
        summary: "High-priority underclassmen target for students with systems, AI infrastructure, embedded, or hardware interests.",
        alumniSearch: "Rutgers NVIDIA intern software engineer"
    },
    {
        id: "amazon-propel-2027",
        company: "Amazon",
        title: "Amazon Propel Program",
        location: "Seattle, WA / Arlington, VA",
        status: "verified_open",
        tags: [
            "Underclassmen",
            "SWE",
            "Big Tech"
        ],
        level: "Freshman/Sophomore",
        source: "Amazon jobs",
        applyUrl: "https://www.amazon.jobs/",
        firstSeen: "2026-06-17",
        lastChecked: "2026-06-20",
        summary: "Strong early-career target. In production, alerts should fire when the title appears on Amazon Jobs or trusted aggregators.",
        alumniSearch: "Rutgers Amazon software development engineer intern"
    },
    {
        id: "bloomberg-swe-2027",
        company: "Bloomberg",
        title: "Software Engineer Intern",
        location: "New York, NY",
        status: "verified_open",
        tags: [
            "SWE",
            "Fintech",
            "NYC"
        ],
        level: "Undergraduate",
        source: "Company careers page",
        applyUrl: "https://www.bloomberg.com/company/careers/",
        firstSeen: "2026-06-18",
        lastChecked: "2026-06-20",
        summary: "NYC-based SWE internship. Strong fit for students who want engineering-heavy work outside West Coast big tech.",
        alumniSearch: "Rutgers Bloomberg software engineer"
    },
    {
        id: "datadog-swe-2027",
        company: "Datadog",
        title: "Software Engineering Intern",
        location: "New York, NY / Boston, MA",
        status: "needs_review",
        tags: [
            "SWE",
            "Cloud",
            "Observability",
            "Systems"
        ],
        level: "Undergraduate",
        source: "Company careers page",
        applyUrl: "https://careers.datadoghq.com/",
        firstSeen: "2026-06-20",
        lastChecked: "2026-06-20",
        summary: "Systems-adjacent software internship target. This category should be prioritized for students interested in infra and backend.",
        alumniSearch: "Rutgers Datadog software engineer"
    },
    {
        id: "meta-university-2027",
        company: "Meta",
        title: "Meta University Engineering",
        location: "Menlo Park, CA / New York, NY",
        status: "likely_open",
        tags: [
            "Underclassmen",
            "SWE",
            "Big Tech"
        ],
        level: "Freshman/Sophomore",
        source: "Meta careers",
        applyUrl: "https://www.metacareers.com/",
        firstSeen: "2026-06-19",
        lastChecked: "2026-06-20",
        summary: "Underclassmen program to monitor. The app should notify students immediately when applications open.",
        alumniSearch: "Rutgers Meta software engineer"
    },
    {
        id: "apple-swe-2027",
        company: "Apple",
        title: "Software Engineering Intern",
        location: "Cupertino, CA",
        status: "needs_review",
        tags: [
            "SWE",
            "Systems",
            "Hardware Adjacent"
        ],
        level: "Undergraduate",
        source: "Apple jobs",
        applyUrl: "https://jobs.apple.com/",
        firstSeen: "2026-06-20",
        lastChecked: "2026-06-20",
        summary: "Apple postings vary by team. AI classification should preserve team names when available instead of collapsing every role into generic SWE.",
        alumniSearch: "Rutgers Apple software engineer intern"
    }
];
const allTags = Array.from(new Set(internships.flatMap((internship)=>internship.tags))).sort();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/internship-radar/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/internship-radar/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/internship-radar/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xdfwkxvqxcshqabkawaw.supabase.co") ?? "";
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZndreHZxeGNzaHFhYmthd2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5OTY2MDYsImV4cCI6MjA5NzU3MjYwNn0.TnE6EHLl8DXnAaKojwa2wsL9QnA34jg9QhjKJAw4LWg") ?? "";
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const __TURBOPACK__default__export__ = supabase;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/internship-radar/src/components/internship-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternshipDashboard",
    ()=>InternshipDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/internship-radar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/internship-radar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/internship-radar/src/lib/seed-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/internship-radar/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatStatus(status) {
    if (status === "verified_open") return "Verified open";
    if (status === "likely_open") return "Likely open";
    return "Needs review";
}
function statusClass(status) {
    if (status === "verified_open") return "status status-open";
    if (status === "likely_open") return "status status-likely";
    return "status status-review";
}
function InternshipDashboard() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tag, setTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [watchedIds, setWatchedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [companyNames, setCompanyNames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [dataInternships, setDataInternships] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternshipDashboard.useEffect": ()=>{
            let mounted = true;
            async function load() {
                try {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("internships").select(`id,company_id,title,location,status,tags,level,source,apply_url,first_seen,last_checked,summary,companies(name,careers_url,linkedin_search_template)`);
                    if (error || !data) throw error ?? new Error("No data returned");
                    const mapped = data.map({
                        "InternshipDashboard.useEffect.load.mapped": (r)=>{
                            const companyObj = Array.isArray(r.companies) ? r.companies[0] : r.companies ?? null;
                            const companyName = companyObj?.name ?? r.company ?? "Unknown";
                            const alumniTemplate = companyObj?.linkedin_search_template ?? "";
                            const alumniSearch = alumniTemplate ? alumniTemplate.replace("{company}", companyName) : `Rutgers ${companyName} software engineer`;
                            return {
                                id: r.id ?? `${companyName}-${r.title}`,
                                companyId: r.company_id ?? null,
                                company: companyName,
                                title: r.title ?? "",
                                location: r.location ?? "",
                                status: r.status ?? "needs_review",
                                tags: r.tags ?? [],
                                level: r.level ?? "Unknown",
                                source: r.source ?? "",
                                applyUrl: r.apply_url ?? r.applyUrl ?? "#",
                                firstSeen: r.first_seen ?? r.firstSeen ?? "",
                                lastChecked: r.last_checked ?? r.lastChecked ?? "",
                                summary: r.summary ?? "",
                                alumniSearch
                            };
                        }
                    }["InternshipDashboard.useEffect.load.mapped"]);
                    if (mounted) {
                        setCompanyNames(new Map(mapped.filter({
                            "InternshipDashboard.useEffect.load": (m)=>m.companyId
                        }["InternshipDashboard.useEffect.load"]).map({
                            "InternshipDashboard.useEffect.load": (m)=>[
                                    m.companyId,
                                    m.company
                                ]
                        }["InternshipDashboard.useEffect.load"])));
                        setDataInternships(mapped);
                    }
                } catch (err) {
                    if (mounted) setDataInternships([]);
                } finally{
                    if (mounted) setLoading(false);
                }
            }
            load();
            return ({
                "InternshipDashboard.useEffect": ()=>{
                    mounted = false;
                }
            })["InternshipDashboard.useEffect"];
        }
    }["InternshipDashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternshipDashboard.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.getSession().then({
                "InternshipDashboard.useEffect": ({ data })=>setUser(data.session?.user ?? null)
            }["InternshipDashboard.useEffect"]);
            const { data: sub } = __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.onAuthStateChange({
                "InternshipDashboard.useEffect": (_event, session)=>setUser(session?.user ?? null)
            }["InternshipDashboard.useEffect"]);
            return ({
                "InternshipDashboard.useEffect": ()=>sub.subscription.unsubscribe()
            })["InternshipDashboard.useEffect"];
        }
    }["InternshipDashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternshipDashboard.useEffect": ()=>{
            if (!user) {
                setWatchedIds(new Set());
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("watchlists").select("company_id").then({
                "InternshipDashboard.useEffect": ({ data })=>setWatchedIds(new Set((data ?? []).map({
                        "InternshipDashboard.useEffect": (r)=>r.company_id
                    }["InternshipDashboard.useEffect"])))
            }["InternshipDashboard.useEffect"]);
        }
    }["InternshipDashboard.useEffect"], [
        user
    ]);
    const filteredInternships = dataInternships.filter((internship)=>{
        const normalizedQuery = query.trim().toLowerCase();
        const matchesQuery = normalizedQuery.length === 0 || [
            internship.company,
            internship.title,
            internship.location,
            internship.summary
        ].filter(Boolean).join(" ").toLowerCase().includes(normalizedQuery);
        const matchesTag = tag === "All" || internship.tags.includes(tag);
        const matchesLevel = level === "All" || internship.level === level;
        return matchesQuery && matchesTag && matchesLevel;
    });
    const openCount = dataInternships.filter((internship)=>internship.status === "verified_open").length;
    const underclassmenCount = dataInternships.filter((internship)=>internship.tags.includes("Underclassmen")).length;
    async function toggleWatch(companyId) {
        if (!companyId) return;
        if (!user) {
            alert("Sign in to save companies to your watchlist.");
            return;
        }
        const adding = !watchedIds.has(companyId);
        setWatchedIds((current)=>{
            const next = new Set(current);
            adding ? next.add(companyId) : next.delete(companyId);
            return next;
        });
        const { error } = adding ? await __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("watchlists").insert({
            user_id: user.id,
            company_id: companyId
        }) : await __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("watchlists").delete().eq("user_id", user.id).eq("company_id", companyId);
        if (error && error.code !== "23505") {
            setWatchedIds((current)=>{
                const next = new Set(current);
                adding ? next.delete(companyId) : next.add(companyId);
                return next;
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Internship Radar"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Track elite tech internships before the application wave gets crowded."
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button button-secondary",
                        href: "#roles",
                        children: "Browse roles"
                    }, void 0, false, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthBar, {
                        user: user
                    }, void 0, false, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "summary-grid",
                "aria-label": "Dashboard summary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Tracked roles"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: dataInternships.length
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Verified open"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: openCount
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Underclassmen"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: underclassmenCount
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Watchlist"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: watchedIds.size
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "toolbar",
                "aria-label": "Internship filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "control",
                        onChange: (event)=>setQuery(event.target.value),
                        placeholder: "Search by company, role, location, or keyword",
                        value: query
                    }, void 0, false, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "control",
                        onChange: (event)=>setTag(event.target.value),
                        value: tag,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All tags"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allTags"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: item,
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "control",
                        onChange: (event)=>setLevel(event.target.value),
                        value: level,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All levels"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Freshman/Sophomore",
                                children: "Freshman/Sophomore"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Undergraduate",
                                children: "Undergraduate"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Junior",
                                children: "Junior"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Graduate",
                                children: "Graduate"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Unknown",
                                children: "Unknown"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "roles",
                        className: "role-list",
                        "aria-label": "Internship roles",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-state",
                            children: "Loading internships..."
                        }, void 0, false, {
                            fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this) : filteredInternships.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-state",
                            children: "No internships match those filters yet."
                        }, void 0, false, {
                            fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this) : filteredInternships.map((internship)=>{
                            const isWatched = internship.companyId ? watchedIds.has(internship.companyId) : false;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "role-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "role-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "role-title",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: internship.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            internship.company,
                                                            " · ",
                                                            internship.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 242,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: statusClass(internship.status),
                                                children: formatStatus(internship.status)
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 241,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: internship.summary
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tag-row",
                                        children: internship.tags.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tag",
                                                children: item
                                            }, `${internship.id}-${item}`, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 257,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "role-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Level: ",
                                                    internship.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "First seen: ",
                                                    internship.firstSeen
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 265,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Last checked: ",
                                                    internship.lastChecked
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Source: ",
                                                    internship.source
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 267,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 263,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "role-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "button",
                                                href: internship.applyUrl,
                                                target: "_blank",
                                                children: "Apply source"
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 271,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button button-secondary",
                                                onClick: ()=>toggleWatch(internship.companyId),
                                                type: "button",
                                                children: isWatched ? "Watching" : "Watch company"
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 274,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "button button-secondary",
                                                href: `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(internship.alumniSearch)}`,
                                                target: "_blank",
                                                children: "Alumni search"
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 281,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 270,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, internship.id, true, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 240,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "side-panel",
                        "aria-label": "Watchlist",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Company watchlist"
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Saved to your account and synced — refresh-proof."
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "watch-list",
                                children: [
                                    ...watchedIds
                                ].map((companyId)=>{
                                    const name = companyNames.get(companyId) ?? "Unknown company";
                                    const companyRoles = dataInternships.filter((i)=>i.companyId === companyId);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "watch-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    companyRoles.length,
                                                    " tracked role source"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    'LinkedIn tip: search "',
                                                    name,
                                                    ' software engineer" with your college name.'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, companyId, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(InternshipDashboard, "lE+bKt27WaQdQFOOyBWbHDjTAZE=");
_c = InternshipDashboard;
function AuthBar({ user }) {
    _s1();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "role-actions",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: user.email
                }, void 0, false, {
                    fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button button-secondary",
                    type: "button",
                    onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.signOut(),
                    children: "Sign out"
                }, void 0, false, {
                    fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
            lineNumber: 329,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "role-actions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "control",
                placeholder: "email",
                value: email,
                onChange: (e)=>setEmail(e.target.value)
            }, void 0, false, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "control",
                type: "password",
                placeholder: "password",
                value: password,
                onChange: (e)=>setPassword(e.target.value)
            }, void 0, false, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button",
                type: "button",
                onClick: async ()=>{
                    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.signInWithPassword({
                        email,
                        password
                    });
                    setMsg(error ? error.message : "");
                },
                children: "Sign in"
            }, void 0, false, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button button-secondary",
                type: "button",
                onClick: async ()=>{
                    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.signUp({
                        email,
                        password
                    });
                    setMsg(error ? error.message : "Account created.");
                },
                children: "Sign up"
            }, void 0, false, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: msg
            }, void 0, false, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 357,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
_s1(AuthBar, "tCIpvjH77FXkT8j6Fm/643/s5gc=");
_c1 = AuthBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "InternshipDashboard");
__turbopack_context__.k.register(_c1, "AuthBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=internship-radar_src_1n_w3uf._.js.map