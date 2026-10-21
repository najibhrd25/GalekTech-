import React from "react";

export interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "size-3.5" }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case "nextjs":
    case "next.js":
    case "next":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="Next.js"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9 8h1.6v8H9V8Zm4.4 0H15l4.5 7.2V8h1.5v8h-1.6L13.4 8Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "react":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="React"
        >
          <ellipse cx="12" cy="12" rx="9" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="TypeScript"
        >
          <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm8.5 7.5H9V18H7.5v-6.5H5V10h6.5v1.5Zm7.2 2.6c0-1.7-1.3-2.3-2.7-2.7-.9-.3-1.3-.5-1.3-.9 0-.4.3-.7.9-.7.6 0 1.2.2 1.7.5l.6-1.1c-.6-.4-1.4-.6-2.2-.6-1.5 0-2.5.9-2.5 2.2 0 1.6 1.2 2.2 2.6 2.6.9.3 1.4.6 1.4 1 0 .5-.4.8-1.1.8-.8 0-1.5-.3-2.1-.8l-.6 1.1c.7.6 1.7.9 2.6.9 1.7 0 2.7-.9 2.7-2.4Z" />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="JavaScript"
        >
          <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm8 9.5c0 1.9-1.2 2.8-2.9 2.8-.8 0-1.5-.2-2-.6l.5-1.2c.4.3.9.5 1.5.5.9 0 1.4-.4 1.4-1.4V10h1.5v3.5Zm7.2.6c0-1.7-1.3-2.3-2.7-2.7-.9-.3-1.3-.5-1.3-.9 0-.4.3-.7.9-.7.6 0 1.2.2 1.7.5l.6-1.1c-.6-.4-1.4-.6-2.2-.6-1.5 0-2.5.9-2.5 2.2 0 1.6 1.2 2.2 2.6 2.6.9.3 1.4.6 1.4 1 0 .5-.4.8-1.1.8-.8 0-1.5-.3-2.1-.8l-.6 1.1c.7.6 1.7.9 2.6.9 1.7 0 2.7-.9 2.7-2.4Z" />
        </svg>
      );

    case "tailwindcss":
    case "tailwind":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="TailwindCSS"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="Node.js"
        >
          <path d="m12 2 8 4.6v9.2L12 20.4 4 15.8V6.6L12 2Z" />
          <path d="M12 22V12" />
          <path d="M20 6.6 12 12 4 6.6" />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="PostgreSQL"
        >
          <ellipse cx="12" cy="7" rx="7" ry="3" />
          <path d="M5 7v10c0 1.66 3.13 3 7 3s7-1.34 7-3V7" />
          <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
        </svg>
      );

    case "python":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="Python"
        >
          <path d="M12 2C8.7 2 8.8 3.4 8.8 3.4V5h4.6v.7H6.3S4 5.4 4 8.6c0 3.3 2 3.2 2 3.2h1.2v-1.6c0-1.8 1.6-1.8 1.6-1.8h4.6c1.5 0 1.8-1.1 1.8-1.8V3.8C15.2 2 12 2 12 2ZM9.8 3.5a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm2.4 18.5c3.3 0 3.2-1.4 3.2-1.4V19H10.8v-.7h7.1s2.3.3 2.3-2.9c0-3.3-2-3.2-2-3.2H17v1.6c0 1.8-1.6 1.8-1.6 1.8H10.8c-1.5 0-1.8 1.1-1.8 1.8v2.8c0 1.8 3.2 1.8 3.2 1.8Zm2.2-1.5a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z" />
        </svg>
      );

    case "wordpress":
    case "wp":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="WordPress"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m5 8 4.5 11 2.5-6.5L9.5 8" />
          <path d="m14 8 3 8 2-6" />
        </svg>
      );

    case "supabase":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="Supabase"
        >
          <path d="M13.2 2.3c-.6-.7-1.8-.4-1.9.5L10 12.5h8.5c1 0 1.6 1.2.9 1.9L8.8 23.3c-.7.8-1.9.4-1.8-.6L8.5 13H1c-1 0-1.5-1.2-.9-1.9L13.2 2.3Z" />
        </svg>
      );

    case "firebase":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="Firebase"
        >
          <path d="M4.6 17.5 7.1 2.9c.1-.5.7-.7 1-.3l3.6 6.7-7.1 8.2ZM12.7 7l1.7-3.2c.3-.5 1-.4 1.1.2l4.8 13.5-7.6-10.5ZM19.4 18.2 17.2 5.5l-3.3 6.2 5.5 6.5ZM4.1 18.6l7.4 4.2c.3.2.7.2 1 0l7.4-4.2-7.9-15-7.9 15Z" />
        </svg>
      );

    case "figma":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="Figma"
        >
          <path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Zm6-3h3a3 3 0 0 1 0 6h-3V3Z" />
        </svg>
      );

    case "php":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="PHP"
        >
          <rect x="2" y="6" width="20" height="12" rx="4" />
          <path d="M6 14v-4h2a1.5 1.5 0 0 1 0 3H6" />
          <path d="M11 10v4" />
          <path d="M14 10v4" />
          <path d="M11 12h3" />
          <path d="M18 14v-4h2a1.5 1.5 0 0 1 0 3h-2" />
        </svg>
      );

    case "golang":
    case "go":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="Go"
        >
          <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm12.5-1.5h-3v3h1.5v-1.5h1.5v1.5a3 3 0 0 1-6 0v-3a3 3 0 0 1 6 0v1.5Z" />
        </svg>
      );

    case "pwa":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} text-neutral-400 hover:text-white transition-colors`}
          aria-label="PWA"
        >
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <path d="M12 18h.01" />
          <path d="M10 6h4" />
        </svg>
      );

    default:
      return (
        <span
          className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider"
          title={name}
        >
          {name}
        </span>
      );
  }
}

export function TechStackList({
  techs,
  className = "flex items-center gap-2",
  iconClassName = "size-3.5",
}: {
  techs?: string[];
  className?: string;
  iconClassName?: string;
}) {
  if (!techs || techs.length === 0) return null;

  return (
    <div className={className}>
      {techs.map((tech) => (
        <span
          key={tech}
          title={tech.toUpperCase()}
          className="inline-flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
        >
          <TechIcon name={tech} className={iconClassName} />
        </span>
      ))}
    </div>
  );
}
