import { BrandIcon } from "@/components/BrandIcon";
import { profile } from "@/data/profile";

export function SocialGrid() {
  return (
    <section className="grid grid-cols-3 gap-2.5 animate-fade-up [animation-delay:160ms] sm:gap-3">
      {profile.socials.map((social, index) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="widget social-tile group flex min-h-[76px] aspect-square items-center justify-center transition-transform duration-200 active:scale-[0.97] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:min-h-0"
          data-brand={social.brand}
          style={{ animationDelay: `${320 + index * 70}ms` }}
        >
          <span
            className="animate-icon-immerse inline-flex"
            style={{ animationDelay: `${360 + index * 70}ms` }}
          >
            <BrandIcon
              brand={social.brand}
              className="size-8 text-[var(--color-ink)] transition-colors duration-200 group-hover:text-[var(--tile-hover)] group-active:text-[var(--tile-hover)] sm:size-9"
            />
          </span>
        </a>
      ))}
    </section>
  );
}
