"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the NewsItem interface
interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    image?: string; // Optional image URL
}

// Define a default image URL
const DEFAULT_IMAGE_URL = '/assets/images/news/default_img.jpg';

// Component to render each news item
const NewsItemCard: React.FC<{ item: NewsItem }> = ({ item }) => {
    const [imageHeight, setImageHeight] = useState<number>(200); // Default image height

    useEffect(() => {
        // Calculate image height based on content height
        const contentElement = document.getElementById(`content-${item.title}`);
        if (contentElement) {
            setImageHeight(contentElement.clientHeight);
        }
    }, [item.description]);

    // Use default image if item.image is undefined
    const imageUrl = item.image || DEFAULT_IMAGE_URL;

    return (
        <div className="flex flex-col md:flex-row border-b border-gray-200 mb-6 pb-6 hover:bg-gray-50 transition duration-300 ease-in-out">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <Image
                    src={imageUrl}
                    alt={item.title}
                    width={500}
                    height={imageHeight}
                    className="object-cover rounded-lg shadow-lg"
                    priority
                />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                    {new Date(item.pubDate).toLocaleDateString('en-GB')} {/* Use a fixed locale */}
                </p>
                <div
                    className="text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-lg mt-4 inline-block"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default NewsItemCard;
