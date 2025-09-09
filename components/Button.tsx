import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  targetBlank?: boolean;
  ariaLabel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  targetBlank = false,
  ariaLabel,
}: Props) {
  return (
    <a
      className={`button ${variant}`}
      href={href}
      aria-label={ariaLabel}
      {...(targetBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
