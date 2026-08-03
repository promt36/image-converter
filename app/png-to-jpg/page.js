import ConverterPage from "@/components/ConverterPage";

export const metadata = {
  title: "PNG to JPG Converter – Convert PNG Images Online Free",
  description:
    "Convert up to 10 PNG images to JPG online for free. Adjust image quality and download files individually or together as a ZIP.",
};

const faqs = [
  {
    question: "How do I convert PNG to JPG?",
    answer:
      "Upload your PNG images, adjust the quality, click Convert to JPG and download the converted files.",
  },
  {
    question: "Can I convert multiple PNG images?",
    answer:
      "Yes. You can convert up to 10 PNG images at the same time.",
  },
  {
    question: "What happens to transparent backgrounds?",
    answer:
      "JPG does not support transparency. Transparent areas will be filled with a white background.",
  },
  {
    question: "Can I download all images together?",
    answer:
      "Yes. Download all converted JPG images together as a ZIP archive.",
  },
  {
    question: "Are my files private?",
    answer:
      "Yes. All image processing happens locally in your browser.",
  },
];

export default function PngToJpgPage() {
  return (
    <ConverterPage
      title="PNG to JPG Converter"
      description="Convert up to 10 PNG images to JPG at once. Adjust image quality and download files individually or together as a ZIP."
      acceptedTypes="image/png"
      outputFormat="image/jpeg"
      outputExtension="jpg"
      uploadLabel="Upload PNG images"
      sourceName="PNG"
      targetName="JPG"
      introduction={[
        "PNG images can be converted to JPG for smaller file sizes and wider compatibility.",
        "JPG is one of the most commonly used image formats for websites, documents and social media.",
        "This converter works entirely in your browser, keeping your files private.",
      ]}
      faqs={faqs}
    />
  );
}