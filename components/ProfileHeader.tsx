import Image from "next/image";
import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function ProfileHeader() {
  return (
    <section className="widget flex items-center gap-4 p-4 animate-fade-up sm:gap-5 sm:p-5">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border-2 border-[var(--color-accent)] shadow-[0_0_28px_rgba(143,226,14,0.22)] sm:size-28">
        {profile.avatarSrc ? (
          <Image
            src={profile.avatarSrc}
            alt={`Foto de ${profile.name}`}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-[#2a2a2a] font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-accent)]">
            {profile.initials}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h1 className="font-[family-name:var(--font-display)] text-[1.35rem] font-bold leading-tight tracking-tight text-[var(--color-ink)] sm:text-2xl">
          {profile.name}
        </h1>
        <a
          href={profile.socials.find((s) => s.id === "instagram")?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] sm:text-[15px]"
        >
          {profile.handle}
        </a>
        <p className="mt-1.5 text-[13px] leading-snug text-[var(--color-muted)] sm:text-sm">
          {profile.title}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] sm:text-sm">
          <MapPin className="size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
          {profile.location}
        </p>
      </div>
    </section>
  );
}
