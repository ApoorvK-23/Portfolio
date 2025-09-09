import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects — Apoorv Kulshrestha" };

export default function ProjectsPage() {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h1 style={{ fontSize: "1.6rem" }}>Projects</h1>
      <p style={{ color: "var(--muted)" }}>
        Case studies, live demos, and source code.
      </p>
      <div className="grid" style={{ marginTop: "1rem" }}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
