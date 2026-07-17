import type { LucideIcon } from "lucide-react";
import { LockKeyhole, Truck, Box } from "lucide-react";
import type { CalloutCardProps } from "../types/shared.types";

interface TrustIndicatorProps {
  icon: LucideIcon;
  label: string;
  description: string;
}

const trustIndicators: TrustIndicatorProps[] = [
  {
    icon: Box,
    label: "Authentic Only",
    description: "100% authentic. No compromise.",
  },
  {
    icon: Truck,
    label: "Fast Delivery",
    description: "Delivered fast. Right to your door.",
  },
  {
    icon: LockKeyhole,
    label: "Secured",
    description: "Your payments. Safe and secure.",
  },
];

const featuredCampaigns: CalloutCardProps[] = [
  {
    headline: "sneak peek",
    description: `see what's landing next`,
    to: "/products",
    ctaTitle: "explore",
  },
  {
    headline: "new arrivals",
    description: `the latest drops straight to you`,
    to: "/products",
    ctaTitle: "shop now",
  },
];

export { trustIndicators, featuredCampaigns };
