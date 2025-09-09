export default function Footer() {
  return (
    <footer className="footer container">
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <div>© {new Date().getFullYear()} Apoorv Kulshrestha</div>
        <div style={{ display: "flex", gap: ".8rem" }}>
          <span className="badge">London, UK</span>
        </div>
      </div>
    </footer>
  );
}
