"use client";

import { useMemo, useState, useEffect } from "react";
import type { Project } from "@/lib/projects";

type Props = {
  items: Project[];
  onFilter: (filtered: Project[]) => void;
};

export default function Filters({ items, onFilter }: Props) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  // Unique tags from items
  const tags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  // Apply filters
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q));

      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((t) => (p.tags || []).includes(t));

      return matchesQuery && matchesTags;
    });
  }, [items, query, activeTags]);

  // Notify parent when filtered changes
  useEffect(() => {
    onFilter(filtered);
  }, [filtered, onFilter]);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <div className="card" style={{ padding: "0.8rem", marginBottom: "1rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "0.6rem",
        }}
      >
        {/* Search */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects (title, blurb, tags)…"
          aria-label="Search projects"
          style={{
            width: "100%",
            padding: "0.6rem 0.8rem",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.02)",
            color: "var(--foreground)",
            outline: "none",
          }}
        />

        {/* Tag chips */}
        <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
          {tags.map((t) => {
            const active = activeTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className="badge"
                style={{
                  cursor: "pointer",
                  borderColor: active
                    ? "rgba(59,130,246,0.6)"
                    : "var(--border)",
                  background: active
                    ? "rgba(59,130,246,0.18)"
                    : "transparent",
                }}
              >
                {t}
              </button>
            );
          })}
          {tags.length === 0 && (
            <span className="badge" style={{ opacity: 0.7 }}>
              No tags found
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

