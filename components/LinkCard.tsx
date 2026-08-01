import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import type { FeaturedLink } from "@/data/profile";

type LinkCardProps = {
  link: FeaturedLink;
  delayMs?: number;
};

export function LinkCard({ link, delayMs = 200 }: LinkCardProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`widget group relative flex min-h-[76px] gap-3 p-3.5 transition-transform duration-200 active:scale-[0.99] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] animate-fade-up sm:gap-3.5 sm:p-4 ${
        link.featured
          ? "border border-[var(--color-accent)]/35 bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
          : ""
      }`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div
        className={`animate-icon-immerse flex size-12 shrink-0 items-center justify-center rounded-xl sm:size-12 ${
          link.featured
            ? "bg-[var(--color-accent)] text-[#111]"
            : "bg-[#2a2a2a] text-[var(--color-ink)]"
        }`}
        style={{ animationDelay: `${delayMs + 80}ms` }}
      >
        <BrandIcon
          brand={link.brand === "portfolio" ? "portfolio" : link.brand}
          className="size-6"
        />
      </div>

      <div className="min-w-0 flex-1 pr-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h2 className="font-[family-name:var(--font-display)] text-[15px] font-bold leading-tight text-[var(--color-ink)] sm:text-base">
            {link.title}
          </h2>
          {link.featured ? (
            <span className="rounded-md bg-[var(--color-accent)]/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Destaque
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-[13px] leading-snug text-[var(--color-muted)] sm:text-sm">
          {link.description}
        </p>
      </div>

      <ArrowUpRight
        className="absolute right-3 top-3 size-4 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]"
        aria-hidden
      />
    </a>
  );
}
