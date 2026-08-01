import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import type { ComponentType, SVGProps } from "react";
import type { SkillId } from "@/data/profile";

const ICONS: Record<
  SkillId,
  ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; color?: string; title?: string }>
> = {
  html: SiHtml5,
  css: SiCss,
  js: SiJavascript,
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  postgres: SiPostgresql,
  tailwind: SiTailwindcss,
  linux: SiLinux,
};

type SkillIconProps = {
  id: SkillId;
  className?: string;
};

export function SkillIcon({ id, className = "size-6" }: SkillIconProps) {
  const Icon = ICONS[id];
  return <Icon className={className} aria-hidden size={24} />;
}
