export default function manifest() {
  return {
    name: "ImageConvert – Online Image Converter",
    short_name: "ImageConvert",
    description:
      "Convert JPG, PNG, WEBP and AVIF images online for free. Fast, private and browser-based image conversion.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    categories: ["utilities", "productivity", "photo"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}