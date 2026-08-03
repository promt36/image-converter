import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "AVIF to JPG Converter – Convert AVIF Images Online Free",
  description:
    "Convert up to 10 AVIF images to JPG online for free. Adjust image quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert AVIF to JPG?",
    answer:
      "Upload one or more AVIF images, adjust the output quality, click Convert to JPG and download the converted files.",
  },
  {
    question: "Can I convert multiple AVIF images at once?",
    answer:
      "Yes. You can upload and convert up to 10 AVIF images in one batch.",
  },
  {
    question: "Can I download all converted images together?",
    answer:
      "Yes. After conversion, you can download all JPG images together in one ZIP file.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. The images are processed locally inside your browser.",
  },
  {
    question: "What happens to transparent AVIF backgrounds?",
    answer:
      "JPG does not support transparency, so transparent areas are changed to a white background.",
  },
];

export default function AvifToJpgPage() {
  return (
    <ConverterPage
      title="AVIF to JPG Converter"
      description="Convert up to 10 AVIF images to JPG at once. Adjust the quality and download each file separately or save the batch as a ZIP."
      acceptedTypes="image/avif,.avif"
      outputFormat="image/jpeg"
      outputExtension="jpg"
      uploadLabel="Upload AVIF images"
      sourceName="AVIF"
      targetName="JPG"
      introduction={[
        "JPG is widely supported by websites, image editors, applications and older devices.",
        "Converting AVIF to JPG can make images easier to edit, upload and share with software that does not support AVIF.",
        "Because JPG does not support transparency, transparent areas are converted to a white background.",
      ]}
      faqs={faqs}
    />
  );
}