export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
export interface CategorizedNavLink {
  category: string;
  links: NavLink[];
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CalloutCardProps {
  headline: string;
  description?: string;
  imageUrl?: string;
  to?: string;
  ctaTitle?: string;
}
