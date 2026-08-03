import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "WEBP to PNG Converter – Convert WEBP Images Online Free",
  description:
    "Convert up to 10 WEBP images to PNG online for free. Download each converted image separately or save all files together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert WEBP to PNG?",
    answer:
      "Upload one or more WEBP images, click Convert to PNG and download the converted files.",
  },
  {
    question: "Can I convert multiple WEBP images at once?",
    answer:
      "Yes. You can convert up to 10 WEBP images in one batch.",
  },
  {
    question: "Does PNG support transparency?",
    answer:
      "Yes. PNG supports transparent backgrounds, so transparent WEBP areas can be preserved.",
  },
  {
    question: "Can I download all PNG files together?",
    answer:
      "Yes. After conversion, you can download all converted PNG files inside one ZIP.",
  },
  {
    question: "Are my images uploaded?",
    answer:
      "No. All image processing happens locally inside your browser.",
  },
];

export default function WebpToPngPage() {
  return (
    <ConverterPage
      title="WEBP to PNG Converter"
      description="Convert up to 10 WEBP images to PNG at once. Download each file separately or save the complete batch as a ZIP."
      acceptedTypes="image/webp"
      outputFormat="image/png"
      outputExtension="png"
      uploadLabel="Upload WEBP images"
      sourceName="WEBP"
      targetName="PNG"
      introduction={[
        "PNG is a lossless image format that is useful for graphics, screenshots, logos and images with transparent backgrounds.",
        "Converting WEBP to PNG can make files easier to edit or use in applications that do not support WEBP.",
        "PNG supports transparency, so transparent areas from compatible WEBP images can be preserved.",
      ]}
      faqs={faqs}
    />
  );
}