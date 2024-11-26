import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share2, Save } from 'lucide-react'

type Video = {
  id: string
  title: string
  channel: string
  views: string
  likes: string
  description: string
}

const VideoPlayer = ({ video }: { video: Video }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  return (
    <div className="mb-6">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <h1 className="text-xl font-bold mb-2">{video.title}</h1>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-600">{video.views} • {new Date().toLocaleDateString()}</p>
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
        <p className={`text-gray-700 ${isDescriptionExpanded ? '' : 'line-clamp-2'}`}>
          {video.description}
        </p>
        <Button
          variant="link"
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          className="mt-2 p-0"
        >
          {isDescriptionExpanded ? 'Show less' : 'Show more'}
        </Button>
      </div>
    </div>
  )
}

export default VideoPlayer

