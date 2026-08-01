import { LinkCard } from "@/components/LinkCard";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SkillsWidget } from "@/components/SkillsWidget";
import { SocialGrid } from "@/components/SocialGrid";
import { SpotifyWidget } from "@/components/SpotifyWidget";
import { profile } from "@/data/profile";

export function BentoGrid() {
  return (
    <div className="mx-auto flex w-full max-w-[440px] flex-col gap-3 overflow-hidden rounded-2xl bg-black/80 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:gap-3.5 sm:rounded-[20px] sm:p-4">
      <ProfileHeader />

      <p className="px-1 text-[13px] leading-relaxed text-[var(--color-muted)] animate-fade-up [animation-delay:60ms] sm:text-sm">
        {profile.bio}
      </p>

      <SkillsWidget />
      <SocialGrid />

      <div className="flex flex-col gap-2.5 sm:gap-3">
        {profile.links.map((link, index) => (
          <LinkCard key={link.id} link={link} delayMs={480 + index * 80} />
        ))}
      </div>

      <SpotifyWidget />

      <footer className="px-1 py-2 text-center text-[11px] leading-snug text-[var(--color-muted)] animate-fade-up [animation-delay:700ms] sm:text-xs">
        © {new Date().getFullYear()} {profile.name} · Desenvolvedor Fullstack
      </footer>
    </div>
  );
}
