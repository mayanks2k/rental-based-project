// utils/getUrlSize.ts
export const getUrlSize = async (url: string): Promise<number | null> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentLength = response.headers.get('Content-Length');

    if (contentLength) {
      // Convert from bytes to MB
      const sizeInMB = Number(contentLength) / (1024 * 1024);
      console.log('Url size:', sizeInMB, 'MB');
      return parseFloat(sizeInMB.toFixed(2)); // Return size in MB with 2 decimal places
    } else {
      throw new Error('Content-Length not found');
    }
  } catch (error) {
    console.error('Error fetching file size:', error);
    return null;
  }
};
