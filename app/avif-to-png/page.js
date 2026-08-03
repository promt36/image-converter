import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "AVIF to PNG Converter – Convert AVIF Images Online Free",
  description:
    "Convert up to 10 AVIF images to PNG online for free. Preserve transparency and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert AVIF to PNG?",
    answer:
      "Upload one or more AVIF images, click Convert to PNG and download the converted files.",
  },
  {
    question: "Can I convert several AVIF images at once?",
    answer:
      "Yes. You can upload and convert up to 10 AVIF images in one batch.",
  },
  {
    question: "Does PNG support transparency?",
    answer:
      "Yes. PNG supports transparent backgrounds, so transparency from compatible AVIF images can be preserved.",
  },
  {
    question: "Can I download all converted PNG images together?",
    answer:
      "Yes. After conversion, download the entire batch inside one ZIP file.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. All processing happens locally inside your browser.",
  },
];

export default function AvifToPngPage() {
  return (
    <ConverterPage
      title="AVIF to PNG Converter"
      description="Convert up to 10 AVIF images to PNG at once. Preserve transparency and download files separately or together as a ZIP."
      acceptedTypes="image/avif,.avif"
      outputFormat="image/png"
      outputExtension="png"
      uploadLabel="Upload AVIF images"
      sourceName="AVIF"
      targetName="PNG"
      introduction={[
        "PNG is a lossless format that is useful for graphics, screenshots, logos and images with transparent backgrounds.",
        "Converting AVIF to PNG can improve compatibility with software that does not support AVIF.",
        "PNG preserves transparency when the original AVIF image contains transparent areas.",
      ]}
      faqs={faqs}
    />
  );
}