import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "WEBP to JPG Converter – Convert WEBP Images Online Free",
  description:
    "Convert up to 10 WEBP images to JPG online for free. Download files separately or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert WEBP to JPG?",
    answer:
      "Upload your WEBP images, choose the output quality, click Convert to JPG and download the converted files.",
  },
  {
    question: "Can I convert multiple WEBP images?",
    answer:
      "Yes. You can upload and convert up to 10 WEBP images in one batch.",
  },
  {
    question: "Can I download all images together?",
    answer:
      "Yes. After conversion, download every JPG image together in one ZIP file.",
  },
  {
    question: "Are my images uploaded?",
    answer:
      "No. The images are processed locally inside your browser.",
  },
];

export default function WebpToJpgPage() {
  return (
    <ConverterPage
      title="WEBP to JPG Converter"
      description="Convert up to 10 WEBP images to JPG at once. Adjust quality and download your files separately or together as a ZIP."
      acceptedTypes="image/webp"
      outputFormat="image/jpeg"
      outputExtension="jpg"
      uploadLabel="Upload WEBP images"
      sourceName="WEBP"
      targetName="JPG"
      introduction={[
        "JPG is widely supported by websites, applications, image editors and older devices.",
        "Converting WEBP to JPG makes images easier to upload, edit and share with software that does not support WEBP.",
        "Because JPG does not support transparency, transparent image areas are converted to a white background.",
      ]}
      faqs={faqs}
    />
  );
}