import type { CategorizedNavLink, NavLink } from "../types/shared.types";
import InstagramIcon from "../ui/components/svgs/InstagramIcon";
import TiktokIcon from "../ui/components/svgs/TiktokIcon";
import XTwitterIcon from "../ui/components/svgs/XTwitterIcon";

interface SocialLinks extends NavLink {
  customIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const mainLinks: NavLink[] = [
  {
    label: "New Arrivals",
    href: "/products/new-arrivals",
  },
  {
    label: "Catalog",
    href: "/products",
  },
  {
    label: "Men",
    href: "/products/men",
  },
  {
    label: "Women",
    href: "/products/women",
  },
  {
    label: "Kids",
    href: "/products/kids",
  },
  {
    label: "Sale",
    href: "/products/sale",
  },
];

export const footerLinks: CategorizedNavLink[] = [
  {
    category: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "New Arrivals", href: "/products/new-arrivals" },
      { label: "Best Sellers", href: "/products/best-sellers" },
      { label: "Sale", href: "/products/sale" },
    ],
  },
  {
    category: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const newsLetter = {
  headline: "stay in the loop",
  subheadline: "Get first access to drops, exclusive offers & more.",
};

export const socialsLinks: SocialLinks[] = [
  {
    customIcon: InstagramIcon,
    label: "instagram",
    href: "https://www.instagram.com/",
  },
  {
    customIcon: XTwitterIcon,
    label: "twitter",
    href: "https://x.com/",
  },
  {
    customIcon: TiktokIcon,
    label: "tiktok",
    href: "https://www.tiktok.com/en/",
  },
];
