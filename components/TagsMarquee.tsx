import { profile } from "@/data/profile";

export function TagsMarquee() {
  const tags = [...profile.tags, ...profile.tags];

  return (
    <div className="widget overflow-hidden py-2.5 animate-fade-up [animation-delay:80ms] sm:py-3">
      <div className="flex w-max animate-marquee gap-5 whitespace-nowrap px-3 will-change-transform sm:gap-6 sm:px-4">
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="font-[family-name:var(--font-display)] text-[13px] font-semibold tracking-wide text-[var(--color-ink)] sm:text-sm"
          >
            <span className="text-[var(--color-accent)]">*</span> {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
