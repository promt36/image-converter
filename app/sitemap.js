const baseUrl = "https://image-convert.net";

const routes = [
  "",
  "/tools",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/compress-image",
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

export default function sitemap() {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/tools" ? 0.9 : 0.8,
  }));
}