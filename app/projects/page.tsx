// app/projects/page.tsx
"use client";

import { useState } from "react";
import { projects as allProjects, type Project } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Filters from "@/components/Filters";

// export const metadata = { title: "Projects — Apoorv Kulshrestha" };

export default function ProjectsPage() {
  const [filtered, setFiltered] = useState<Project[]>(allProjects);

  return (
    <section style={{ marginTop: "2rem" }}>
      <h1 style={{ fontSize: "1.6rem" }}>Projects</h1>
      <p style={{ color: "var(--muted)" }}>
        Case studies, live demos, and source code.
      </p>

      {/* Filters: no year, just search + tags */}
      <Filters items={allProjects} onFilter={setFiltered} />

      <div className="grid" style={{ marginTop: "1rem" }}>
        {filtered.length > 0 ? (
          filtered.map((p) => <ProjectCard key={p.slug} project={p} />)
        ) : (
          <div className="card" style={{ padding: "1rem" }}>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              No projects match your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

