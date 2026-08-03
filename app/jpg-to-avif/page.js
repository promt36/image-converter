import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "JPG to AVIF Converter – Convert JPG Images Online Free",
  description:
    "Convert up to 10 JPG images to AVIF online for free. Adjust image quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert JPG to AVIF?",
    answer:
      "Upload one or more JPG images, adjust the output quality, click Convert to AVIF and download the converted files.",
  },
  {
    question: "Can I convert multiple JPG images at once?",
    answer:
      "Yes. You can upload and convert up to 10 JPG images in one batch.",
  },
  {
    question: "Why convert JPG to AVIF?",
    answer:
      "AVIF can provide smaller file sizes while maintaining good image quality, which can help websites load faster.",
  },
  {
    question: "Can I download all converted files together?",
    answer:
      "Yes. After conversion, you can download the complete batch in one ZIP file.",
  },
  {
    question: "Are my images uploaded?",
    answer:
      "No. Your images are processed locally inside your browser.",
  },
];

export default function JpgToAvifPage() {
  return (
    <ConverterPage
      title="JPG to AVIF Converter"
      description="Convert up to 10 JPG images to AVIF at once. Adjust quality and download files separately or together as a ZIP."
      acceptedTypes="image/jpeg,.jpg,.jpeg"
      outputFormat="image/avif"
      outputExtension="avif"
      uploadLabel="Upload JPG images"
      sourceName="JPG"
      targetName="AVIF"
      introduction={[
        "AVIF is a modern image format designed to deliver good visual quality at smaller file sizes.",
        "Converting JPG to AVIF can reduce image weight and improve website performance.",
        "The quality slider lets you choose between maximum detail and a smaller output file.",
      ]}
      faqs={faqs}
    />
  );
}