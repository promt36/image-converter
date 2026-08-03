export const tools = [
  {
    title: "PNG to JPG",
    href: "/png-to-jpg",
    source: "PNG",
    target: "JPG",
    category: "Image Conversion",
    description: "Convert PNG images to widely supported JPG files.",
    popular: true,
    isNew: false,
  },
  {
    title: "JPG to PNG",
    href: "/jpg-to-png",
    source: "JPG",
    target: "PNG",
    category: "Image Conversion",
    description: "Convert JPG images to lossless PNG files.",
    popular: true,
    isNew: false,
  },
  {
    title: "JPG to WEBP",
    href: "/jpg-to-webp",
    source: "JPG",
    target: "WEBP",
    category: "Image Conversion",
    description: "Create lightweight WEBP images from JPG files.",
    popular: true,
    isNew: false,
  },
  {
    title: "WEBP to JPG",
    href: "/webp-to-jpg",
    source: "WEBP",
    target: "JPG",
    category: "Image Conversion",
    description: "Convert WEBP images to widely supported JPG files.",
    popular: true,
    isNew: false,
  },
  {
    title: "PNG to WEBP",
    href: "/png-to-webp",
    source: "PNG",
    target: "WEBP",
    category: "Image Conversion",
    description: "Convert PNG images to modern WEBP files.",
    popular: false,
    isNew: false,
  },
  {
    title: "WEBP to PNG",
    href: "/webp-to-png",
    source: "WEBP",
    target: "PNG",
    category: "Image Conversion",
    description: "Convert WEBP images to lossless PNG files.",
    popular: false,
    isNew: false,
  },
  {
    title: "AVIF to JPG",
    href: "/avif-to-jpg",
    source: "AVIF",
    target: "JPG",
    category: "Image Conversion",
    description: "Convert AVIF images to compatible JPG files.",
    popular: true,
    isNew: false,
  },
  {
    title: "AVIF to PNG",
    href: "/avif-to-png",
    source: "AVIF",
    target: "PNG",
    category: "Image Conversion",
    description: "Convert AVIF images to lossless PNG files.",
    popular: false,
    isNew: false,
  },
  {
    title: "AVIF to WEBP",
    href: "/avif-to-webp",
    source: "AVIF",
    target: "WEBP",
    category: "Image Conversion",
    description: "Convert AVIF images to modern WEBP files.",
    popular: false,
    isNew: false,
  },
  {
    title: "JPG to AVIF",
    href: "/jpg-to-avif",
    source: "JPG",
    target: "AVIF",
    category: "Image Conversion",
    description: "Convert JPG images to efficient AVIF files.",
    popular: false,
    isNew: false,
  },
  {
    title: "PNG to AVIF",
    href: "/png-to-avif",
    source: "PNG",
    target: "AVIF",
    category: "Image Conversion",
    description: "Convert PNG images to AVIF while preserving transparency.",
    popular: false,
    isNew: false,
  },
  {
    title: "WEBP to AVIF",
    href: "/webp-to-avif",
    source: "WEBP",
    target: "AVIF",
    category: "Image Conversion",
    description: "Convert WEBP images to efficient AVIF files.",
    popular: false,
    isNew: false,
  },
  {
    title: "Compress Image",
    href: "/compress-image",
    source: "IMAGE",
    target: "SMALLER",
    category: "Optimization",
    description:
      "Reduce JPG, PNG and WEBP file sizes directly in your browser.",
    popular: true,
    isNew: true,
  },
];

export const categories = [
  "All",
  "Image Conversion",
  "Optimization",
];

export function getPopularTools() {
  return tools.filter((tool) => tool.popular);
}

export function getNewTools() {
  return tools.filter((tool) => tool.isNew);
}

export function getToolsByCategory(category) {
  if (!category || category === "All") {
    return tools;
  }

  return tools.filter((tool) => tool.category === category);
}