export type InternshipStatus = "verified_open" | "likely_open" | "needs_review";

export type Internship = {
  id: string;
  company: string;
  title: string;
  location: string;
  status: InternshipStatus;
  tags: string[];
  level: "Freshman/Sophomore" | "Undergraduate" | "Junior" | "Graduate" | "Unknown";
  source: string;
  applyUrl: string;
  firstSeen: string;
  lastChecked: string;
  summary: string;
  alumniSearch: string;
};

export const internships: Internship[] = [
  {
    id: "google-swe-2027",
    company: "Google",
    title: "Software Engineering Intern, Summer 2027",
    location: "Mountain View, CA / New York, NY",
    status: "needs_review",
    tags: ["SWE", "AI/ML", "Underclassmen", "Big Tech"],
    level: "Undergraduate",
    source: "Company careers page",
    applyUrl: "https://www.google.com/about/careers/applications/",
    firstSeen: "2026-06-20",
    lastChecked: "2026-06-20",
    summary:
      "Placeholder posting used for the V1 dashboard. In production, this card will be created from daily source checks and AI classification.",
    alumniSearch: "Rutgers Google software engineer",
  },
  {
    id: "microsoft-explore-2027",
    company: "Microsoft",
    title: "Explore / Discovery Program",
    location: "Redmond, WA",
    status: "likely_open",
    tags: ["Underclassmen", "SWE", "PM", "Big Tech"],
    level: "Freshman/Sophomore",
    source: "Early careers page",
    applyUrl: "https://careers.microsoft.com/",
    firstSeen: "2026-06-19",
    lastChecked: "2026-06-20",
    summary:
      "Underclassmen-oriented program to watch closely. The final app should flag this for first-year and second-year students.",
    alumniSearch: "Rutgers Microsoft software engineer",
  },
  {
    id: "nvidia-ignite-2027",
    company: "NVIDIA",
    title: "Ignite Intern Program",
    location: "Santa Clara, CA",
    status: "likely_open",
    tags: ["Underclassmen", "AI Infra", "Systems", "Hardware"],
    level: "Freshman/Sophomore",
    source: "University recruiting page",
    applyUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/",
    firstSeen: "2026-06-18",
    lastChecked: "2026-06-20",
    summary:
      "High-priority underclassmen target for students with systems, AI infrastructure, embedded, or hardware interests.",
    alumniSearch: "Rutgers NVIDIA intern software engineer",
  },
  {
    id: "amazon-propel-2027",
    company: "Amazon",
    title: "Amazon Propel Program",
    location: "Seattle, WA / Arlington, VA",
    status: "verified_open",
    tags: ["Underclassmen", "SWE", "Big Tech"],
    level: "Freshman/Sophomore",
    source: "Amazon jobs",
    applyUrl: "https://www.amazon.jobs/",
    firstSeen: "2026-06-17",
    lastChecked: "2026-06-20",
    summary:
      "Strong early-career target. In production, alerts should fire when the title appears on Amazon Jobs or trusted aggregators.",
    alumniSearch: "Rutgers Amazon software development engineer intern",
  },
  {
    id: "bloomberg-swe-2027",
    company: "Bloomberg",
    title: "Software Engineer Intern",
    location: "New York, NY",
    status: "verified_open",
    tags: ["SWE", "Fintech", "NYC"],
    level: "Undergraduate",
    source: "Company careers page",
    applyUrl: "https://www.bloomberg.com/company/careers/",
    firstSeen: "2026-06-18",
    lastChecked: "2026-06-20",
    summary:
      "NYC-based SWE internship. Strong fit for students who want engineering-heavy work outside West Coast big tech.",
    alumniSearch: "Rutgers Bloomberg software engineer",
  },
  {
    id: "datadog-swe-2027",
    company: "Datadog",
    title: "Software Engineering Intern",
    location: "New York, NY / Boston, MA",
    status: "needs_review",
    tags: ["SWE", "Cloud", "Observability", "Systems"],
    level: "Undergraduate",
    source: "Company careers page",
    applyUrl: "https://careers.datadoghq.com/",
    firstSeen: "2026-06-20",
    lastChecked: "2026-06-20",
    summary:
      "Systems-adjacent software internship target. This category should be prioritized for students interested in infra and backend.",
    alumniSearch: "Rutgers Datadog software engineer",
  },
  {
    id: "meta-university-2027",
    company: "Meta",
    title: "Meta University Engineering",
    location: "Menlo Park, CA / New York, NY",
    status: "likely_open",
    tags: ["Underclassmen", "SWE", "Big Tech"],
    level: "Freshman/Sophomore",
    source: "Meta careers",
    applyUrl: "https://www.metacareers.com/",
    firstSeen: "2026-06-19",
    lastChecked: "2026-06-20",
    summary:
      "Underclassmen program to monitor. The app should notify students immediately when applications open.",
    alumniSearch: "Rutgers Meta software engineer",
  },
  {
    id: "apple-swe-2027",
    company: "Apple",
    title: "Software Engineering Intern",
    location: "Cupertino, CA",
    status: "needs_review",
    tags: ["SWE", "Systems", "Hardware Adjacent"],
    level: "Undergraduate",
    source: "Apple jobs",
    applyUrl: "https://jobs.apple.com/",
    firstSeen: "2026-06-20",
    lastChecked: "2026-06-20",
    summary:
      "Apple postings vary by team. AI classification should preserve team names when available instead of collapsing every role into generic SWE.",
    alumniSearch: "Rutgers Apple software engineer intern",
  },
];

export const allTags = Array.from(
  new Set(internships.flatMap((internship) => internship.tags)),
).sort();

