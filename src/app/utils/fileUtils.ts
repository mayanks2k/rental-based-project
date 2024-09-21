// utils/fileUtils.ts
export function getFileNameAndExtension(fileName: string): { name: string; extension: string } {
    const lastDotIndex = fileName.lastIndexOf('.');
    const name = lastDotIndex === -1 ? fileName : fileName.slice(0, lastDotIndex);
    const extension = lastDotIndex === -1 ? '' : fileName.slice(lastDotIndex + 1);
    return { name, extension };
  }
  