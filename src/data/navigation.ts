export const NAV_LINKS = [
  { key: "services", target: "services" },
  { key: "caseStudies", target: "case-studies" },
  { key: "about", target: "about" },
  { key: "insights", target: "insights" }
] as const;

export const SECTION_IDS = {
  hero: "hero",
  services: "services",
  ai: "ai-services",
  bpo: "bpo",
  about: "about",
  caseStudies: "case-studies",
  process: "process",
  industries: "industries",
  testimonials: "testimonials",
  insights: "insights",
  contact: "contact"
} as const;
