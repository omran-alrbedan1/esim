export const SITE = {
  name: "Beyond Gluten",
  shortName: "Beyond Gluten",
  tagline: "Gluten-Free, Full of Flavor",
  description: "Your destination for delicious gluten-free products.",
} as const;

export const CONTACT = {
  email: "hello@beyondgluten.com",
} as const;

export const NAV_LINKS = [
  { to: "/", labelKey: "home" },
  { to: "/about", labelKey: "about" },
  { to: "/contact", labelKey: "contact" },
  { to: "/policies", labelKey: "policies" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
] as const;
