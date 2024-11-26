import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MainContent = () => {
  const playlists = [
    { id: 1, name: "Today's Top Hits", image: "/placeholder.svg?height=150&width=150" },
    { id: 2, name: "Discover Weekly", image: "/placeholder.svg?height=150&width=150" },
    { id: 3, name: "Release Radar", image: "/placeholder.svg?height=150&width=150" },
    { id: 4, name: "Your Top Songs 2023", image: "/placeholder.svg?height=150&width=150" },
    { id: 5, name: "Chill Hits", image: "/placeholder.svg?height=150&width=150" },
    { id: 6, name: "Rock Classics", image: "/placeholder.svg?height=150&width=150" },
  ]

  return (
    <ScrollArea className="flex-1 bg-gradient-to-b from-blue-900 to-black p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button className="bg-black bg-opacity-50 rounded-full p-2">
            <ChevronLeft className="text-white" />
          </button>
          <button className="bg-black bg-opacity-50 rounded-full p-2">
            <ChevronRight className="text-white" />
          </button>
        </div>
        <button className="bg-white text-black px-4 py-1 md:px-8 md:py-2 rounded-full font-bold text-sm md:text-base">
          Upgrade
        </button>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Good afternoon</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {playlists.slice(0, 6).map((playlist) => (
          <div key={playlist.id} className="bg-white bg-opacity-10 rounded-md flex items-center overflow-hidden hover:bg-opacity-20 transition cursor-pointer">
            <img src={playlist.image} alt={playlist.name} className="w-12 h-12 md:w-20 md:h-20" />
            <span className="ml-2 md:ml-4 font-semibold text-sm md:text-base">{playlist.name}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-6">Made for You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-zinc-800 p-3 md:p-4 rounded-md hover:bg-zinc-700 transition cursor-pointer">
            <img src={playlist.image} alt={playlist.name} className="w-full mb-4 rounded-md" />
            <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{playlist.name}</h3>
            <p className="text-xs md:text-sm text-gray-400">By Spotify</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export default MainContent

