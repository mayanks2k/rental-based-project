"use client"
import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { BASE_URL } from '@/constants';
import axios from 'axios';

const page = () => {
    const [url, setUrl] = useState('');
    const [fileType, setFileType] = useState<'image' | 'document'>('image');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleUpload = async () => {
        if (!url) {
            setMessage('Please enter a URL.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/auth/file-uploads/`, {
                url,
                file_type: fileType,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('car_rental_token')}`
                }
            }
            );

            setMessage(`File uploaded successfully: ${response.data.message}`);
        } catch (error) {
            setMessage('Failed to upload the file.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4">Upload File from URL</h2>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">File Type</label>
                <select
                    value={fileType}
                    onChange={(e) => setFileType(e.target.value as 'image' | 'document')}
                    className="w-full p-2 border rounded"
                >
                    <option value="image">Image</option>
                    <option value="document">Document</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">File URL</label>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter the URL"
                    className="w-full p-2 border rounded"
                />
            </div>
            <button
                onClick={handleUpload}
                disabled={isLoading}
                className={`w-full p-2 flex items-center justify-center rounded ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
                    } text-white`}
            >
                <FaCloudUploadAlt className="mr-2" />
                {isLoading ? 'Uploading...' : 'Upload'}
            </button>
            {message && (
                <div className="mt-4 p-2 bg-gray-100 border rounded">
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default page;
