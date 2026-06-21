module.exports = [
"[project]/internship-radar/src/lib/seed-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/internship-radar/src/components/internship-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternshipDashboard",
    ()=>InternshipDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/internship-radar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/internship-radar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/internship-radar/src/lib/seed-data.ts [app-ssr] (ecmascript)");
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
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tag, setTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [watchedCompanies, setWatchedCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "Google",
        "Microsoft",
        "NVIDIA"
    ]);
    const filteredInternships = (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const normalizedQuery = query.trim().toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internships"].filter((internship)=>{
            const matchesQuery = normalizedQuery.length === 0 || [
                internship.company,
                internship.title,
                internship.location,
                internship.summary
            ].join(" ").toLowerCase().includes(normalizedQuery);
            const matchesTag = tag === "All" || internship.tags.includes(tag);
            const matchesLevel = level === "All" || internship.level === level;
            return matchesQuery && matchesTag && matchesLevel;
        });
    }, [
        level,
        query,
        tag
    ]);
    const openCount = __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internships"].filter((internship)=>internship.status === "verified_open").length;
    const underclassmenCount = __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internships"].filter((internship)=>internship.tags.includes("Underclassmen")).length;
    function toggleWatch(company) {
        setWatchedCompanies((current)=>current.includes(company) ? current.filter((item)=>item !== company) : [
                ...current,
                company
            ].sort());
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Internship Radar"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Track elite tech internships before the application wave gets crowded."
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button button-secondary",
                        href: "#roles",
                        children: "Browse roles"
                    }, void 0, false, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "summary-grid",
                "aria-label": "Dashboard summary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Tracked roles"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internships"].length
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Verified open"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: openCount
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Underclassmen"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: underclassmenCount
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metric",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Watchlist"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: watchedCompanies.length
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "toolbar",
                "aria-label": "Internship filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "control",
                        onChange: (event)=>setQuery(event.target.value),
                        placeholder: "Search by company, role, location, or keyword",
                        value: query
                    }, void 0, false, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "control",
                        onChange: (event)=>setTag(event.target.value),
                        value: tag,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All tags"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allTags"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: item,
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "control",
                        onChange: (event)=>setLevel(event.target.value),
                        value: level,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All levels"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Freshman/Sophomore",
                                children: "Freshman/Sophomore"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Undergraduate",
                                children: "Undergraduate"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Junior",
                                children: "Junior"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Graduate",
                                children: "Graduate"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Unknown",
                                children: "Unknown"
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "roles",
                        className: "role-list",
                        "aria-label": "Internship roles",
                        children: filteredInternships.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-state",
                            children: "No internships match those filters yet."
                        }, void 0, false, {
                            fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this) : filteredInternships.map((internship)=>{
                            const isWatched = watchedCompanies.includes(internship.company);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "role-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "role-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "role-title",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: internship.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            internship.company,
                                                            " · ",
                                                            internship.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: statusClass(internship.status),
                                                children: formatStatus(internship.status)
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: internship.summary
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tag-row",
                                        children: internship.tags.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tag",
                                                children: item
                                            }, `${internship.id}-${item}`, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "role-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Level: ",
                                                    internship.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "First seen: ",
                                                    internship.firstSeen
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Last checked: ",
                                                    internship.lastChecked
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Source: ",
                                                    internship.source
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "role-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "button",
                                                href: internship.applyUrl,
                                                target: "_blank",
                                                children: "Apply source"
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 164,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button button-secondary",
                                                onClick: ()=>toggleWatch(internship.company),
                                                type: "button",
                                                children: isWatched ? "Watching" : "Watch company"
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "button button-secondary",
                                                href: `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(internship.alumniSearch)}`,
                                                target: "_blank",
                                                children: "Alumni search"
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 174,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, internship.id, true, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 133,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "side-panel",
                        "aria-label": "Watchlist",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Company watchlist"
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "V1 stores this in browser state. Next step is Supabase so users can save watchlists and receive email alerts."
                                    }, void 0, false, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "watch-list",
                                children: watchedCompanies.map((company)=>{
                                    const companyRoles = __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internships"].filter((internship)=>internship.company === company);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "watch-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: company
                                            }, void 0, false, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    companyRoles.length,
                                                    " tracked role source"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$internship$2d$radar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    'LinkedIn tip: search "',
                                                    company,
                                                    ' software engineer" with your college name.'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, company, true, {
                                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/internship-radar/src/components/internship-dashboard.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/internship-radar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/internship-radar/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=internship-radar_08ow9i2._.js.map