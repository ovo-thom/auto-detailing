import type { Metadata } from "next";
import { siteInfo } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${siteInfo.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_BE",
      siteName: siteInfo.name,
      title: fullTitle,
      description,
      url: path,
    },
  };
}
