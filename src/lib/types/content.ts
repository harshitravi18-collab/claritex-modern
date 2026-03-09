export type Locale = "en" | "de";

export type NavItem = {
  label: string;
  target: string;
};

export type MegaMenuColumn = {
  heading: string;
  accent: string;
  items: Array<{
    name: string;
    desc: string;
  }>;
};

export type ServiceOverviewCard = {
  title: string;
  desc: string;
};

export type AIServiceContent = {
  title: string;
  tag: string;
  desc: string;
};

export type BPOCategoryContent = {
  cat: string;
  desc: string;
  svcs: string[];
};

export type IndustryContent = {
  name: string;
  head: string;
  desc: string;
  items: string[];
};

export type CaseStudyContent = {
  tag: string;
  title: string;
  desc: string;
  stats: Array<{ v: string; l: string }>;
};

export type ProcessStepContent = {
  n: string;
  title: string;
  desc: string;
};

export type TestimonialContent = {
  name: string;
  role: string;
  q: string;
  av: string;
};

export type BlogPostContent = {
  date: string;
  tag: string;
  title: string;
  blurb: string;
};

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  msg: string;
};
