export type Language = "en" | "tr" | "bg";

export type NavItem = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: NavItem[];
};
