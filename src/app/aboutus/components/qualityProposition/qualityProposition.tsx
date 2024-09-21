"use client"

import Image from "next/image"
import { Quality } from "../../constants"
import { useState } from "react";


export const QualityProposition: React.FC = () => {
  const [quality, setQuality] = useState("LUXURY");

    return (
        <div>
            <div className="grid grid-cols-2">
                <Image
                    className="h-[500px] w-full object-cover"
                    src={`/assets/images/aboutus/client.jpg`}
                    width={900}
                    height={500}
                    alt="client"
                />

                <div className="bg-gray-200 px-32 py-28">
                <h1 className="text-4xl mb-3 font-bold">Only Quality For Clients</h1>

                <div className="flex space-x-5 py-8">
                    {Quality.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setQuality(item.type)}
                        className={`px-5 py-2.5 text-sm ${
                        quality === item.type
                            ? "bg-green-500 text-white shadow-lg rounded"
                            : "hover:text-green-600 first:ps-0"
                        }`}
                    >
                        {item.type}
                    </button>
                    ))}
                </div>

                {Quality.filter((item) => item.type === quality).map(
                    (item, index) => (
                    <p key={index} className="font-light">
                        {item.content}
                    </p>
                    )
                )}
                </div>
            </div>
        </div>
    )
}