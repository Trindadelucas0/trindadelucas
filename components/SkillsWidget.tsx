import { SkillIcon } from "@/components/SkillIcon";
import { profile } from "@/data/profile";

export function SkillsWidget() {
  return (
    <section className="widget p-3.5 animate-fade-up [animation-delay:100ms] sm:p-4">
      <p className="mb-3 font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent)]">
        Hard Skills
      </p>
      <ul className="grid grid-cols-3 gap-2 sm:gap-3">
        {profile.skills.map((skill, index) => (
          <li key={skill.id} className="flex justify-center">
            <span
              className="skill-chip animate-icon-immerse inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl text-[var(--color-ink)] transition-colors duration-200 sm:size-12"
              style={{
                ["--skill-color" as string]: skill.color,
                animationDelay: `${180 + index * 55}ms`,
              }}
              title={skill.name}
              aria-label={skill.name}
            >
              <SkillIcon id={skill.id} className="size-6 sm:size-7" />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
