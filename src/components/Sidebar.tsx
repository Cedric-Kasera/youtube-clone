import { Home, Compass, PlaySquare, Clock, Film, Gamepad, Newspaper, Trophy, Lightbulb, X } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: PlaySquare, label: 'Subscriptions', path: '/subscriptions' },
    { icon: Clock, label: 'Library', path: '/library' },
  ]

  const categories = [
    { icon: Film, label: 'Movies & Shows', path: '/movies' },
    { icon: Gamepad, label: 'Gaming', path: '/gaming' },
    { icon: Newspaper, label: 'News', path: '/news' },
    { icon: Trophy, label: 'Sports', path: '/sports' },
    { icon: Lightbulb, label: 'Learning', path: '/learning' },
  ]

  return (
    <aside className={`bg-white w-60 pt-4  fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex justify-between items-center p-4 lg:hidden">
        <img src="/youtube-logo.svg" alt="YouTube" className="h-6" />
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <ScrollArea className="py-2 ml-1.5 lg:fixed h-[calc(100vh-4rem)]">
        <nav className="px-4 lg:px-8">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition duration-150 ease-in-out" onClick={onClose}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <h3 className="text-sm font-semibold text-gray-500 mb-2 px-2">Categories</h3>
          <ul className="space-y-2">
            {categories.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition duration-150 ease-in-out" onClick={onClose}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </aside>
  )
}

export default Sidebar

