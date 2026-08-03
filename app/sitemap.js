const baseUrl = "https://yourdomain.com";

export default function sitemap() {
  const routes = [
    "",
    "/tools",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",

    "/png-to-jpg",
    "/png-to-webp",
    "/png-to-avif",

    "/jpg-to-png",
    "/jpg-to-webp",
    "/jpg-to-avif",

    "/webp-to-jpg",
    "/webp-to-png",
    "/webp-to-avif",

    "/avif-to-jpg",
    "/avif-to-png",
    "/avif-to-webp",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/tools" ? 0.9 : 0.8,
  }));
}