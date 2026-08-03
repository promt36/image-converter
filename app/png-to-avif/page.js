import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "PNG to AVIF Converter – Convert PNG Images Online Free",
  description:
    "Convert up to 10 PNG images to AVIF online for free. Adjust image quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert PNG to AVIF?",
    answer:
      "Upload one or more PNG images, adjust the output quality, click Convert to AVIF and download the converted files.",
  },
  {
    question: "Can I convert multiple PNG images at once?",
    answer:
      "Yes. You can upload and convert up to 10 PNG images in one batch.",
  },
  {
    question: "Does AVIF support transparency?",
    answer:
      "Yes. AVIF supports transparency, so transparent PNG backgrounds can be preserved.",
  },
  {
    question: "Can I download all converted images together?",
    answer:
      "Yes. After conversion, you can download the full batch inside one ZIP file.",
  },
  {
    question: "Are my images uploaded?",
    answer:
      "No. Your images are processed locally inside your browser.",
  },
];

export default function PngToAvifPage() {
  return (
    <ConverterPage
      title="PNG to AVIF Converter"
      description="Convert up to 10 PNG images to AVIF at once. Adjust quality and download files separately or together as a ZIP."
      acceptedTypes="image/png,.png"
      outputFormat="image/avif"
      outputExtension="avif"
      uploadLabel="Upload PNG images"
      sourceName="PNG"
      targetName="AVIF"
      introduction={[
        "AVIF is a modern image format that can reduce file size while maintaining strong visual quality.",
        "Converting PNG to AVIF can improve website speed and reduce bandwidth usage.",
        "AVIF supports transparency, making it suitable for logos, graphics and product images with transparent backgrounds.",
      ]}
      faqs={faqs}
    />
  );
}