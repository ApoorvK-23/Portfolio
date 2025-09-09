"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "https://github.com/your-github", label: "GitHub", external: true },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="container" style={{ padding: "1rem 0" }}>
      <nav
        className="card"
        style={{
          padding: ".8rem 1rem",
          display: "flex",
          justifyContent: "center", // center buttons
          borderRadius: "14px",
        }}
      >
        <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
          {links.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-btn ${
                  pathname === href ? "active" : ""
                }`}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`nav-btn ${
                  pathname === href ? "active" : ""
                }`}
              >
                {label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
