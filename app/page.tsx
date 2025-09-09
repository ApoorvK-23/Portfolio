import Image from "next/image";
import Button from "@/components/Button";

const intro = `I’m Apoorv Kulshrestha, a data analyst focused on forecasting, dashboards, and decision support. I turn messy, multi-source data into simple tools teams use to decide faster. With an MSc in Business Analytics & Big Data and hands-on experience in Retail Operations, I bridge operations and analytics. My toolkit: Python, SQL, pandas, scikit-learn, and Streamlit/Tableau. I care about clean pipelines, reproducible workflows, and clear narratives. Recent work includes a PE-firm matcher, energy-generation forecasts, and a contract analysis assistant. If this resonates, explore my projects or say hello.`;

export default function HomePage() {
  return (
    <section
      className="hero container"
      style={{ marginTop: "4rem", textAlign: "center" }}
    >
      <div className="blob" />
      <div className="hero-content">
        <div
          className="card"
          style={{
            margin: "0 auto",
            padding: "1.5rem",
            maxWidth: 860,
          }}
        >
          {/* Avatar wrapper */}
          <div
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <Image
              src="/avatar.jpg"
              alt="Apoorv Kulshrestha"
              width={250}
              height={250}
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>
            Apoorv Kulshrestha
          </h1>
          <p style={{ color: "var(--muted)", marginTop: "-.4rem" }}>
            Data Analyst · Business Analyst
          </p>

          <p
            style={{
              margin: "1rem auto 0",
              maxWidth: 680,
              lineHeight: 1.6,
              color: "var(--foreground)",
            }}
          >
            {intro}
          </p>

          <div
            style={{
              display: "flex",
              gap: ".8rem",
              justifyContent: "center",
              marginTop: "1.1rem",
              flexWrap: "wrap",
            }}
          >
             <div style={{ marginTop: "1.2rem" }}>
            <Button
              href="/resume.pdf"
              targetBlank
              ariaLabel="View Resume"
              variant="primary"
            >
              View Resume
            </Button>
          </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
