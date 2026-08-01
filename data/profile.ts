export type SkillId =
  | "html"
  | "css"
  | "js"
  | "react"
  | "next"
  | "node"
  | "postgres"
  | "tailwind"
  | "linux";

export type Skill = {
  id: SkillId;
  name: string;
  color: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  brand: "instagram" | "github" | "whatsapp";
};

export type FeaturedLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
  brand: "portfolio" | "whatsapp" | "github";
};

export const profile = {
  name: "Lucas Rodrigues",
  handle: "@luca.srodr1gu3s",
  title: "Engenheiro de Software · Fullstack",
  location: "Brasília",
  bio: "Engenheiro de software fullstack. Arquiteto e desenvolvo sistemas com regras de negócio consistentes — da modelagem à operação em produção.",
  initials: "LR",
  avatarSrc: "/avatar.jpg" as string | null,
  tags: [
    "Dev",
    "Fullstack",
    "Backend",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "React",
    "VPS",
  ],
  skills: [
    { id: "html", name: "HTML5", color: "#e34f26" },
    { id: "css", name: "CSS3", color: "#1572b6" },
    { id: "js", name: "JavaScript", color: "#f7df1e" },
    { id: "react", name: "React", color: "#61dafb" },
    { id: "next", name: "Next.js", color: "#ffffff" },
    { id: "node", name: "Node.js", color: "#339933" },
    { id: "postgres", name: "PostgreSQL", color: "#4169e1" },
    { id: "tailwind", name: "Tailwind CSS", color: "#38bdf8" },
    { id: "linux", name: "Linux", color: "#fcc624" },
  ] satisfies Skill[],
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/luca.srodr1gu3s",
      brand: "instagram",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Trindadelucas0",
      brand: "github",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/5538998100827",
      brand: "whatsapp",
    },
  ] satisfies SocialLink[],
  links: [
    {
      id: "portfolio",
      title: "Portfólio — System",
      description:
        "Sistemas sob medida: do conceito à operação. Veja projetos reais no ar.",
      href: "https://system.avadesk.com.br/",
      featured: true,
      brand: "portfolio",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Fale comigo direto. Retorno rápido para ideias e projetos.",
      href: "https://wa.me/5538998100827",
      brand: "whatsapp",
    },
  ] satisfies FeaturedLink[],
  spotify: {
    label: "Estou escutando...",
    embedUrl:
      "https://open.spotify.com/embed/album/6ehm0SMBBoSxH8oSrFXre6?utm_source=generator&si=9ce26ccc548d4216",
  },
} as const;
