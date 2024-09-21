interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
  }
  
  export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
    // Determine the base URL based on the environment
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://car-rental-ctkkrakmva-el.a.run.app';
  
    // Construct the image URL
    return `${baseUrl}/${src}?w=${width}&q=${quality || 75}`;
  }
  