export const metadata = { title: "Contact — Apoorv Kulshrestha" };

export default function ContactPage() {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h1>Contact</h1>
      <p style={{ color: "var(--muted)" }}>
        I’d love to connect on opportunities where data and decision-making meet.
      </p>
      <div className="card" style={{ padding: "1rem", display: "grid", gap: ".8rem" }}>
        <a className="badge" href="mailto:apoorvmailbox@gmail.com">apoorvmailbox@gmail.com</a>
        <a className="badge" href="https://www.linkedin.com/in/apoorvkulshrestha/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="badge" href="https://github.com/ApoorvK-23" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="badge">London, UK</span>
      </div>
    </section>
  );
}
