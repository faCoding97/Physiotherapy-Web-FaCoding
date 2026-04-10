import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Activity,
  ArrowRight,
  Brain,
  Compass,
  Dumbbell,
  Flower2,
  Footprints,
  Hand,
  Headphones,
  HeartPulse,
  Home,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Waves,
  Accessibility,
  Bone
} from "lucide-react";
import siteData from "@/data/site.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const site = siteData;

export type SiteData = typeof siteData;

export function absoluteUrl(path = "") {
  return new URL(path || "/", site.org.domain).toString();
}

export function buildPageMetadata(pageKey: keyof typeof siteData.pageMeta) {
  const meta = site.pageMeta[pageKey];
  const pathMap: Record<keyof typeof siteData.pageMeta, string> = {
    home: "/",
    about: "/about",
    services: "/services",
    conditions: "/conditions-treated",
    referrals: "/referrals",
    locations: "/locations",
    contact: "/contact"
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pathMap[pageKey]
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl(pathMap[pageKey]),
      siteName: site.org.brandName,
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: site.org.brandName
        }
      ],
      locale: "en_ZA",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [absoluteUrl("/og-image.png")]
    }
  };
}

export const iconMap = {
  activity: Activity,
  arm: Accessibility,
  arrow: ArrowRight,
  brain: Brain,
  compass: Compass,
  dumbbell: Dumbbell,
  flower: Flower2,
  footprints: Footprints,
  hand: Hand,
  headphones: Headphones,
  "heart-pulse": HeartPulse,
  home: Home,
  "shield-check": ShieldCheck,
  "smile-plus": SmilePlus,
  sparkles: Sparkles,
  spine: Bone,
  stethoscope: Stethoscope,
  stretch: Activity,
  waves: Waves
};
