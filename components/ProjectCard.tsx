// components/ProjectCard.tsx
"use client";
import Image from "next/image";
import Button from "./Button";
import { Project } from "@/lib/projects";

function isExternal(src: string) {
  return /^https?:\/\//i.test(src);
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, blurb, tags, image, links, slug } = project;

  const Img = () => {
    const style: React.CSSProperties = {
      width: "100%",
      height: "auto",
      borderRadius: 12,
      display: "block",
      backgroundColor: "#0f1629",
    };

    // Use plain <img> for external sources (no next.config.js changes needed)
    if (isExternal(image)) {
      return <img src={image} alt={title} style={style} loading="lazy" />;
    }

    // Use Next <Image> only for local /public images
    return (
      <Image
        src={image}
        alt={title}
        width={640}
        height={420}
        style={style}
        priority={false}
      />
    );
  };

  return (
    <article className="card" style={{ padding: "1rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "1rem",
        }}
      >
        <div>
          <Img />
        </div>

        <div>
          <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{title}</h3>
          <p style={{ color: "var(--muted)" }}>{blurb}</p>

          <div
            style={{
              display: "flex",
              gap: ".5rem",
              flexWrap: "wrap",
              marginBottom: ".8rem",
            }}
          >
            {tags.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
            {slug && (
              <Button
                href={`/projects/${slug}`}
                variant="primary"
                ariaLabel={`Read ${title} case study`}
              >
                Case Study
              </Button>
            )}
            {links?.liveDemo && links.liveDemo !== "#" && (
              <Button href={links.liveDemo} variant="ghost" targetBlank>
                Live Demo
              </Button>
            )}
            {links?.code && (
              <Button href={links.code} variant="ghost" targetBlank>
                {links.code.match(/\.(xlsx|xls|xlsm)(\?|$)/i)
                  ? "Download"
                  : "Code"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
