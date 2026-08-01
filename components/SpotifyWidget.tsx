import { profile } from "@/data/profile";

export function SpotifyWidget() {
  return (
    <section className="flex flex-col gap-2 animate-fade-up [animation-delay:380ms] sm:gap-3">
      <p className="px-1 text-[13px] text-[var(--color-muted)] sm:text-sm">
        {profile.spotify.label}
      </p>
      <div className="widget overflow-hidden p-1.5 sm:p-2">
        <iframe
          title="Spotify"
          src={profile.spotify.embedUrl}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="h-[280px] w-full rounded-xl border-0 sm:h-[352px]"
        />
      </div>
    </section>
  );
}
