// src/app/news/page.tsx

import React from 'react';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import NewsItemCard from './NewsItemCard';
import MainLayout from '@/layout/MainLayout';
import { Header } from '@/components/Header';

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

// Function to fetch and parse news from RSS feed
const fetchNews = async (): Promise<NewsItem[]> => {
    const RSS_URL = 'https://cleantechnica.com/category/clean-transport-2/electric-vehicles/feed/';

    try {
        const response = await axios.get(RSS_URL);
        const parsedData = await parseStringPromise(response.data, { mergeAttrs: true });

        return parsedData.rss.channel[0].item.map((item: any) => ({
            title: item.title[0],
            link: item.link[0],
            pubDate: new Date(item.pubDate[0]).toISOString(), // Standardize date format
            description: item.description[0],
            image: extractImageUrl(item.description[0]) || DEFAULT_IMAGE_URL, // Use default image if no image URL is available
        }));
    } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
        return [];
    }
};

// Helper function to extract image URL from the description HTML
const extractImageUrl = (description: string): string | undefined => {
    const match = description.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : undefined;
};

// Main News component (Server Component)
const News = async () => {
    const newsItems = await fetchNews();

    return (
        <MainLayout>
            <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-800">
                <Header />
            </div>
            <div className="px-2 sm:px-5 md:px-10 lg:px-32">
                {/* Header Section */}
                <div className="text-center  p-8 rounded-lg mb-10">
                    <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text drop-shadow-lg">
                        Electric Vehicle News
                    </h1>
                    <p className="text-lg">
                        Stay updated with the latest in electric vehicles, innovations, and industry trends.
                    </p>
                </div>


                {/* News Items Section */}
                <div className="space-y-10">
                    {newsItems.length > 0 ? (
                        newsItems.map((item, index) => (
                            <NewsItemCard key={index} item={item} />
                        ))
                    ) : (
                        <p className="text-lg text-gray-600 text-center">No news available at the moment.</p>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default News;
