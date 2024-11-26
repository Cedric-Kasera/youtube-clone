import { ScrollArea } from "@/components/ui/scroll-area"

type Video = {
  id: string
  title: string
  channel: string
  views: string
  likes: string
  description: string
}

const RecommendedVideos = ({ onVideoSelect }: { onVideoSelect: (video: Video) => void }) => {
  const videos: Video[] = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      channel: 'Rick Astley',
      views: '1.2B views',
      likes: '15M',
      description: 'The official video for "Never Gonna Give You Up" by Rick Astley...',
    },
    {
      id: 'kJQP7kiw5Fk',
      title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
      channel: 'Luis Fonsi',
      views: '8B views',
      likes: '47M',
      description: 'Despacito ft. Daddy Yankee...',
    },
    // Add more video objects here...
  ]

  return (
    <ScrollArea className="h-[calc(100vh-5rem)]">
      <h2 className="text-lg font-semibold mb-4">Recommended videos</h2>
      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex space-x-2 cursor-pointer"
            onClick={() => onVideoSelect(video)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="w-40 h-24 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.channel}</p>
              <p className="text-sm text-gray-600">{video.views}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export default RecommendedVideos

