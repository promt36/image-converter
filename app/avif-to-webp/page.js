import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "AVIF to WEBP Converter – Convert AVIF Images Online Free",
  description:
    "Convert up to 10 AVIF images to WEBP online for free. Preserve quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert AVIF to WEBP?",
    answer:
      "Upload one or more AVIF images, click Convert to WEBP and download the converted files.",
  },
  {
    question: "Can I convert multiple AVIF images?",
    answer:
      "Yes. You can upload and convert up to 10 AVIF images at once.",
  },
  {
    question: "Does WEBP support transparency?",
    answer:
      "Yes. WEBP supports transparent backgrounds, so transparency from AVIF images can be preserved.",
  },
  {
    question: "Can I download all images together?",
    answer:
      "Yes. Download every converted WEBP image inside one ZIP archive.",
  },
  {
    question: "Are my images uploaded?",
    answer:
      "No. Everything is processed locally in your browser.",
  },
];

export default function AvifToWebpPage() {
  return (
    <ConverterPage
      title="AVIF to WEBP Converter"
      description="Convert up to 10 AVIF images to WEBP at once. Download files individually or together as a ZIP."
      acceptedTypes="image/avif,.avif"
      outputFormat="image/webp"
      outputExtension="webp"
      uploadLabel="Upload AVIF images"
      sourceName="AVIF"
      targetName="WEBP"
      introduction={[
        "WEBP is a modern image format that provides good compression while maintaining image quality.",
        "Converting AVIF to WEBP can improve compatibility with websites and applications that support WEBP but not AVIF.",
        "WEBP supports transparency, making it suitable for logos, icons and graphics.",
      ]}
      faqs={faqs}
    />
  );
}