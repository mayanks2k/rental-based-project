// src/app/api/getUrlSize.ts
import { NextApiRequest, NextApiResponse } from 'next';

const getUrlSizeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Check if the request method is GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL is required' });
  }

  console.log('Fetching URL:', url);

  try {
    // Using GET to fetch the resource
    const response = await fetch(url);

    // Check if the response is okay
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error fetching URL' });
    }

    const contentLength = response.headers.get('Content-Length');

    if (contentLength) {
      const sizeInMB = Number(contentLength) / (1024 * 1024);
      return res.status(200).json({ size: parseFloat(sizeInMB.toFixed(2)) });
    } else {
      return res.status(404).json({ error: 'Content-Length not found' });
    }
  } catch (error) {
    console.error('Error fetching file size:', error);
    console.error('Failed to fetch from URL:', url);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getUrlSizeHandler;
