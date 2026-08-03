import { absoluteUrl } from "@/utils/seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ImageConvert",
    url: absoluteUrl("/"),
    description:
      "Free online image converter supporting JPG, PNG, WEBP and AVIF.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/tools")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ImageConvert",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function softwareSchema(tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.title,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: tool.description,
    url: absoluteUrl(tool.href),
  };
}