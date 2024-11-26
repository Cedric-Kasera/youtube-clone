import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2, Save } from "lucide-react";
import RecommendedVideos from "./RecommendedVideos";
import Comments from "./Comments";
import { ScrollArea } from "@/components/ui/scroll-area";

type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  likes: string;
  description: string;
};

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video>({
    id: id || "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    channel: "Rick Astley",
    views: "1.2B views",
    likes: "15M",
    description:
      'The official video for "Never Gonna Give You Up" by Rick Astley. Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.  The album was itself a UK number one and would go on to sell over 15 million copies worldwide.The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2.  The video passed the 1bn YouTube views milestone on 28 July 2021.',
  });
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <ScrollArea className="flex-1 h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
            <h1 className="text-xl font-bold mb-2">{video.title}</h1>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600">
                  {video.views} • {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-5 w-5 mr-2" />
                  {video.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <ThumbsDown className="h-5 w-5 mr-2" />
                  Dislike
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm">
                  <Save className="h-5 w-5 mr-2" />
                  Save
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">{video.channel}</h3>
              <p
                className={`text-gray-700 ${
                  isDescriptionExpanded ? "" : "line-clamp-2"
                }`}
              >
                {video.description}
              </p>
              <Button
                variant="link"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-2 p-0"
              >
                {isDescriptionExpanded ? "Show less" : "Show more"}
              </Button>
            </div>
            <Comments videoId={video.id} />
          </div>
          <div>
            <RecommendedVideos onVideoSelect={setVideo} />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default VideoPage;
