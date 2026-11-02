import type { MetadataRoute } from "next";
import { navigationLinks } from "@/lib/navigation";
import { siteInfo } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigationLinks.map(({ href }) => ({
    url: href === "/" ? siteInfo.url : `${siteInfo.url}${href}`,
  }));
}
