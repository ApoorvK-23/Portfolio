// lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  links: { caseStudy?: string; liveDemo?: string; code?: string };
  content?: {
    overview: string;
    problem: string;
    approach: string;
    outcome: string;
  };
};

// ---------------- Projects ----------------
const rawProjects: Project[] = [
  {
    slug: "retail-ai-multi-ingest",
    title: "Retail AI — Multi-Ingest + Shopify Connector",
    blurb:
      "A Streamlit app that ingests multiple CSV/Excel files or connects directly to Shopify. It standardizes schemas, cleans data, unifies tables, and powers dashboards with KPIs, forecasts, and stockout risk analysis.",
    tags: [
      "Python",
      "Streamlit",
      "Retail",
      "Data Pipeline",
      "Shopify API",
      "Forecasting",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    links: {
      liveDemo: "https://retail-sales-dash.streamlit.app/",
      code: "https://github.com/ApoorvK-23/Retail",
    },
    content: {
      overview:
        "Built a Streamlit app to unify messy retail data sources. Users can upload multiple CSV/Excel files with varying schemas, or connect directly to Shopify orders via API. The app maps columns to a canonical schema, cleans/normalizes data, and produces unified datasets.",
      problem:
        "Retailers often struggle with fragmented reporting across spreadsheets and e-commerce platforms, wasting time reconciling formats before analysis.",
      approach:
        "Implemented per-sheet schema mapping with synonym detection, union with provenance (`source_file`, `source_sheet`, `Source_Origin`), and optional pre-aggregation recipes. Added forecasting using weekday averages, anomaly detection via z-scores, and a stockout risk table. The UI uses KPI cards, interactive dashboards, and an optional GPT-powered analyst for insights.",
      outcome:
        "The app reduces data preparation overhead, lets teams quickly explore KPIs across multiple sources, and provides actionable risk forecasts. Shopify integration validates schema via GraphQL introspection and enables direct ingestion of live order data.",
    },
  },
  {
    slug: "HealthcareAI",
    title: "Healthcare RAG Assistant",
    blurb:
      "Upload PDFs/images; extract entities, cite sources, and answer with guardrailed, patient-friendly language.",
    tags: ["RAG", "Streamlit", "OpenAI", "Healthcare"],
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop",
    links: {
      liveDemo: "https://aihealthcare.streamlit.app/",
      code: "https://github.com/ApoorvK-23/Health",
    },
    content: {
      overview:
        "Cut triage time by ~30% in mock evaluations; high satisfaction on clarity and citations.",
      problem:
        "Clinicians need quick summaries with citations across varied documents.",
      approach:
        "Chunking + vector search + answer rewriter with patient-friendly tone and disclaimers.",
      outcome:
        "Faster triage; clearer, citation-backed answers in tests.",
    },
  },
  {
    slug: "inventory-optimization-excel",
    title: "Inventory Optimization Model in Excel",
    blurb:
      "An Excel-based optimization tool that uses a genetic algorithm to balance stock levels, minimize holding costs, and reduce stockouts.",
    tags: ["Excel", "Optimization", "Genetic Algorithm", "Supply Chain"],
    image:
      "https://i.pcmag.com/imagery/articles/03dI0LmA2GJzfLIGI2xUir4-2..v1708701892.jpg",
    links: {
      liveDemo:
        "https://docs.google.com/spreadsheets/d/1PkRXMbFJEi9U2fRgfYvV_BA1gUIQ4a8A/edit?usp=sharing&ouid=117151821993572042372&rtpof=true&sd=true",
      code: "https://docs.google.com/spreadsheets/d/1PkRXMbFJEi9U2fRgfYvV_BA1gUIQ4a8A/edit?usp=drive_link&ouid=117151821993572042372&rtpof=true&sd=true",
    },
    content: {
      overview:
        "Developed an Excel model for inventory optimization using a genetic algorithm. The tool helps managers find an optimal balance between demand satisfaction and cost efficiency.",
      problem:
        "Traditional inventory policies often led to excess holding costs or frequent stockouts, with no simple way to simulate trade-offs in Excel.",
      approach:
        "Implemented a genetic algorithm within Excel using VBA and Solver to simulate multiple generations of possible inventory policies. Added flexibility for inputting demand forecasts, costs, and constraints, with automated scenario testing.",
      outcome:
        "The model reduced expected stockouts by ~20% while lowering holding costs, giving decision-makers a practical tool for inventory planning. It also demonstrated how optimization techniques can be applied directly in Excel without specialized software.",
    },
  },
  
  {
    slug: "contract-assistant",
    title: "Contract Analysis Assistant (GenAI)",
    blurb:
      "A lightweight RAG assistant to summarize clauses, flag risks, and extract key terms for procurement teams.",
    tags: ["Generative AI", "RAG", "FastAPI", "Streamlit"],
    image: "/projects/sample-3.jpg",
    links: {
      liveDemo: "#",
      code: "https://github.com/your-github/contract-assistant",
    },
    content: {
      overview:
        "Prototype assistant for contract triage across NDAs, MSAs, and SOWs.",
      problem: "Manual review is slow and inconsistent across stakeholders.",
      approach:
        "Chunking, hybrid search, prompt templates; explainable highlights; guardrails for PII.",
      outcome:
        "Faster triage and clearer summaries for non-legal users.",
    },
  },
];

// ------------- Exports -------------
export const projects: Project[] = (rawProjects || []).filter(
  (p): p is Project => Boolean(p && p.slug)
);

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) || null;
}
