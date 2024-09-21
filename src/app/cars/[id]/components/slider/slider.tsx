import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MdImageNotSupported } from "react-icons/md";

interface ImageProps {
  type: "image";
  url: string;
  alt?: string;
  isActive?: boolean;
  onClick: () => void;
}

interface VideoProps {
  type: "video";
  url: string;
  alt?: string;
  isActive?: boolean;
  onClick: () => void;
}

type ThumbnailProps = ImageProps | VideoProps;

const Thumbnail: React.FC<ThumbnailProps> = ({
  type,
  url,
  alt,
  isActive = false,
  onClick,
}) => {
  const renderThumbnail = () => {
    if (type === "image") {
      return (
        <button
          type="button"
          className={`rounded-lg w-20 h-20 ${
            isActive ? "opacity-100" : "opacity-60"
          }`}
          onClick={onClick}
        >
          <Image src={url} alt={alt || "car"} width={200} height={200} />
        </button>
      );
    } else if (type === "video") {
      return (
        <button
          type="button"
          className={`rounded-lg w-20 h-20 ${
            isActive ? "opacity-100" : "opacity-60"
          }`}
          onClick={onClick}
        >
          <Image
            src={url}
            alt={alt || "video thumbnail"}
            width={200}
            height={200}
          />
        </button>
      );
    }
    return null;
  };

  return renderThumbnail();
};

interface SliderProps {
  images: string[];
  videos: string[];
  selectedImageIndex: number | null;
  setSelectedImageIndex: (index: number | null) => void;
}

const Slider: React.FC<SliderProps> = ({
  images,
  videos,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const handleImageChange = (index: number) => {
    setSelectedImageIndex(index);
    setSelectedVideoUrl(null); // Reset video URL when an image is selected
  };

  const handleVideoChange = (url: string) => {
    setSelectedVideoUrl(url);
    setSelectedImageIndex(null); // Reset selected image index when a video is selected
  };

  return (
    <div>
      {selectedVideoUrl ? (
        <div className="w-full">
          <ReactPlayer url={selectedVideoUrl} controls={true} />
        </div>
      ) : selectedImageIndex !== null && images[selectedImageIndex] ? (
        <Image
          className="w-full"
          src={images[selectedImageIndex]}
          alt="car"
          width={600}
          height={400}
        />
      ) : (
        <div className="h-[400px] bg-slate-200 w-full rounded-lg flex flex-col justify-center items-center space-y-2">
          <MdImageNotSupported size={50} color="gray" />
          <p className="text-gray-500">Image Not Available</p>
        </div>
      )}
      <div className="flex space-x-5 my-2">
        {images.map((imageUrl, index) => (
          <Thumbnail
            key={index}
            type="image"
            url={imageUrl}
            alt="car"
            isActive={index === selectedImageIndex}
            onClick={() => handleImageChange(index)}
          />
        ))}
        {videos.map((videoUrl, index) => (
          <Thumbnail
            key={index}
            type="video"
            url={getYouTubeThumbnailUrl(videoUrl) || ""}
            alt="video thumbnail"
            isActive={videoUrl === selectedVideoUrl}
            onClick={() => handleVideoChange(videoUrl)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

function getYouTubeVideoId(url: string): string | null {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function getYouTubeThumbnailUrl(url: string): string | null {
  const videoId = getYouTubeVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;
}

