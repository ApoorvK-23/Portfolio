// import { getProject } from "@/lib/projects";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Button from "@/components/Button";

// type Props = { params: { slug: string } };

// export async function generateMetadata({ params }: Props) {
//   const proj = getProject(params.slug);
//   return {
//     title: proj ? `${proj.title} — Case Study` : "Case Study",
//     description: proj?.blurb,
//   };
// }

// export default function ProjectCaseStudy({ params }: Props) {
//   const project = getProject(params.slug);
//   if (!project) return notFound();

//   const { title, blurb, image, tags, links, content } = project;

//   return (
//     <section style={{ marginTop: "2rem" }}>
//       <div className="card" style={{ padding: "1rem" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "1rem" }}>
//           <div>
//             <h1 style={{ marginTop: 0 }}>{title}</h1>
//             <p style={{ color: "var(--muted)" }}>{blurb}</p>
//             <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: ".8rem" }}>
//               {tags.map((t) => <span key={t} className="badge">{t}</span>)}
//             </div>
//             <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
//               <Button href="/projects" variant="ghost">Back to Projects</Button>
//               <Button href={links.liveDemo} variant="ghost" targetBlank>Live Demo</Button>
//               <Button href={links.code} variant="ghost" targetBlank>Code</Button>
//             </div>
//           </div>
//           <div>
//             <Image
//               src={image}
//               alt={title}
//               width={900}
//               height={600}
//               style={{ width: "100%", height: "auto", borderRadius: 12 }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid" style={{ marginTop: "1rem" }}>
//         <article className="card" style={{ padding: "1rem" }}>
//           <h2>Overview</h2>
//           <p style={{ color: "var(--muted)" }}>{content?.overview}</p>
//           <h3>Problem</h3>
//           <p style={{ color: "var(--muted)" }}>{content?.problem}</p>
//           <h3>Approach</h3>
//           <p style={{ color: "var(--muted)" }}>{content?.approach}</p>
//           <h3>Outcome</h3>
//           <p style={{ color: "var(--muted)" }}>{content?.outcome}</p>
//         </article>
//       </div>
//     </section>
//   );
// }

// app/projects/[slug]/page.tsx
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import Button from "@/components/Button";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const proj = getProject(params.slug);
  return {
    title: proj ? `${proj.title} — Case Study` : "Case Study",
    description: proj?.blurb ?? "Project case study",
  };
}

export default function ProjectCaseStudy({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  const { title, blurb, image, tags, links, content } = project;

  return (
    <section style={{ marginTop: "2rem" }}>
      <div className="card" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>{title}</h1>
        <p style={{ color: "var(--muted)" }}>{blurb}</p>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: ".8rem" }}>
          {tags.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
          <Button href="/projects" variant="ghost">Back to Projects</Button>
          {links.liveDemo && links.liveDemo !== "#" && (
            <Button href={links.liveDemo} variant="ghost" targetBlank>
              Live Demo
            </Button>
          )}
          {links.code && (
            <Button href={links.code} variant="ghost" targetBlank>
              {links.code.match(/\.(xlsx|xls|xlsm)(\?|$)/i) ? "Download" : "Code"}
            </Button>
          )}
        </div>
      </div>

      {content && (
        <article className="card" style={{ padding: "1rem", marginTop: "1rem" }}>
          {content.overview && (
            <>
              <h2>Overview</h2>
              <p style={{ color: "var(--muted)" }}>{content.overview}</p>
            </>
          )}
          {content.problem && (
            <>
              <h3>Problem</h3>
              <p style={{ color: "var(--muted)" }}>{content.problem}</p>
            </>
          )}
          {content.approach && (
            <>
              <h3>Approach</h3>
              <p style={{ color: "var(--muted)" }}>{content.approach}</p>
            </>
          )}
          {content.outcome && (
            <>
              <h3>Outcome</h3>
              <p style={{ color: "var(--muted)" }}>{content.outcome}</p>
            </>
          )}
        </article>
      )}
    </section>
  );
}

