import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "PNG to WEBP Converter – Convert PNG Images Online Free",
  description:
    "Convert up to 10 PNG images to WEBP online for free. Adjust image quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert PNG to WEBP?",
    answer:
      "Upload one or more PNG images, choose the output quality, click Convert to WEBP and download the converted files.",
  },
  {
    question: "Can I convert several PNG images at once?",
    answer:
      "Yes. You can upload and convert up to 10 PNG images in one batch.",
  },
  {
    question: "Does WEBP support transparency?",
    answer:
      "Yes. WEBP supports transparent image areas, so transparent PNG backgrounds can be preserved.",
  },
  {
    question: "Can I download all converted images together?",
    answer:
      "Yes. After conversion, you can download all WEBP images together inside one ZIP file.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Your images are processed locally inside your browser.",
  },
];

export default function PngToWebpPage() {
  return (
    <ConverterPage
      title="PNG to WEBP Converter"
      description="Convert up to 10 PNG images to WEBP at once. Adjust image quality and download files separately or together as a ZIP."
      acceptedTypes="image/png"
      outputFormat="image/webp"
      outputExtension="webp"
      uploadLabel="Upload PNG images"
      sourceName="PNG"
      targetName="WEBP"
      introduction={[
        "WEBP is a modern image format that can produce smaller files while maintaining good visual quality.",
        "Converting PNG to WEBP can help websites load faster and reduce bandwidth use.",
        "WEBP supports transparency, making it suitable for logos, graphics and product images with transparent backgrounds.",
      ]}
      faqs={faqs}
    />
  );
}