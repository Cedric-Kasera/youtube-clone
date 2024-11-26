import { Slider } from '@/components/ui/slider'
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Mic2, ListMusic, Laptop2, Volume, Maximize2 } from 'lucide-react'

const Player = () => {
  return (
    <div className="h-20 md:h-24 bg-zinc-900 border-t border-zinc-800 px-2 md:px-4 flex items-center justify-between">
      <div className="flex items-center w-1/3">
        <img src="/placeholder.svg?height=56&width=56" alt="Album cover" className="h-10 w-10 md:h-14 md:w-14 mr-2 md:mr-4" />
        <div className="hidden sm:block">
          <h4 className="text-xs md:text-sm font-semibold">Song Name</h4>
          <p className="text-xs text-gray-400">Artist Name</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center space-x-2 md:space-x-6 mb-1 md:mb-4">
          <Shuffle className="hidden md:block text-gray-400 w-4 h-4" />
          <SkipBack className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <button className="bg-white rounded-full p-1 md:p-2">
            <Play className="text-black w-4 h-4 md:w-5 md:h-5" />
          </button>
          <SkipForward className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <Repeat className="hidden md:block text-gray-400 w-4 h-4" />
        </div>
        <div className="flex items-center w-full px-2 md:px-0">
          <span className="text-xs text-gray-400 w-8 md:w-10 text-right hidden md:block">0:00</span>
          <Slider className="w-full mx-2 md:mx-4" />
          <span className="text-xs text-gray-400 w-8 md:w-10 hidden md:block">3:45</span>
        </div>
      </div>
      <div className="flex items-center justify-end w-1/3 space-x-2 md:space-x-4">
        <Mic2 className="hidden md:block text-gray-400 w-4 h-4" />
        <ListMusic className="hidden md:block text-gray-400 w-4 h-4" />
        <Laptop2 className="hidden md:block text-gray-400 w-4 h-4" />
        <div className="hidden md:flex items-center space-x-2">
          <Volume className="text-gray-400 w-4 h-4" />
          <Slider className="w-20 md:w-24" />
        </div>
        <Maximize2 className="hidden md:block text-gray-400 w-4 h-4" />
      </div>
    </div>
  )
}

export default Player

