import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  thumbnail: string;
};

const HomePage = () => {
  const [videos] = useState<Video[]>([
    {
      id: "dQw4w9WgXcQ",
      title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
      channel: "Rick Astley",
      views: "1.2B views",
      timestamp: "3 years ago",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Luis Fonsi - Despacito ft. Daddy Yankee",
      channel: "Luis Fonsi",
      views: "8B views",
      timestamp: "5 years ago",
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },
    {
      id: "COMhNZ0srwA",
      title: "10 Legendary Games You Totally Forgot Existed",
      channel: "Global Game Explorer",
      views: "15M views",
      timestamp: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/COMhNZ0srwA/maxresdefault.jpg",
    },

    // Add more video objects here...
  ]);

  return (
    <ScrollArea className="flex-1 h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-1 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <Link
              to={`/video/${video.id}`}
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover md:object-cover md:w-full lg:w-full lg:object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">{video.channel}</p>
                <p className="text-gray-500 text-xs">
                  {video.views} • {video.timestamp}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default HomePage;
