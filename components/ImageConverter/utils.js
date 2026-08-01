export const MAX_FILES = 10;

export function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export function getDownloadName(fileName, outputExtension) {
  const lastDotPosition = fileName.lastIndexOf(".");

  const nameWithoutExtension =
    lastDotPosition > 0
      ? fileName.substring(0, lastDotPosition)
      : fileName;

  return `${nameWithoutExtension}.${outputExtension}`;
}

export function createItem(file) {
  return {
    id: crypto.randomUUID(),
    file,
    previewUrl: URL.createObjectURL(file),
    downloadUrl: "",
    convertedSize: "",
    convertedBytes: 0,
    status: "ready",
    errorMessage: "",
  };
}