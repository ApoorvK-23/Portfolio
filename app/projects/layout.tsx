// app/projects/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Apoorv Kulshrestha",
  description: "Case studies, live demos, and source code.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // no "use client" here — keeps it a Server Component
  return <>{children}</>;
}
