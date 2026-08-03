import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "WEBP to AVIF Converter – Convert WEBP Images Online Free",
  description:
    "Convert up to 10 WEBP images to AVIF online for free. Adjust image quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert WEBP to AVIF?",
    answer:
      "Upload one or more WEBP images, adjust the output quality, click Convert to AVIF and download the converted files.",
  },
  {
    question: "Can I convert multiple WEBP images at once?",
    answer:
      "Yes. You can upload and convert up to 10 WEBP images in one batch.",
  },
  {
    question: "Does AVIF support transparency?",
    answer:
      "Yes. AVIF supports transparency, so transparent WEBP backgrounds can be preserved.",
  },
  {
    question: "Can I download all converted images together?",
    answer:
      "Yes. After conversion, you can download the complete batch inside one ZIP file.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. The conversion happens locally inside your browser.",
  },
];

export default function WebpToAvifPage() {
  return (
    <ConverterPage
      title="WEBP to AVIF Converter"
      description="Convert up to 10 WEBP images to AVIF at once. Adjust quality and download files separately or together as a ZIP."
      acceptedTypes="image/webp,.webp"
      outputFormat="image/avif"
      outputExtension="avif"
      uploadLabel="Upload WEBP images"
      sourceName="WEBP"
      targetName="AVIF"
      introduction={[
        "AVIF is a modern image format designed to provide strong visual quality at smaller file sizes.",
        "Converting WEBP to AVIF can reduce image weight and improve website loading performance.",
        "AVIF supports transparency, making it suitable for graphics, logos and product images.",
      ]}
      faqs={faqs}
    />
  );
}