import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu, Search, Bell, Video, User, ArrowLeft } from 'lucide-react'

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-[1px]">
        <div className="flex justify-between items-center h-16">
          {!isSearchVisible && (
            <>
              <div className="flex items-center">
                <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-4">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
                <Link to="/" className="flex items-center">
                  <img src="/youtube-logo.svg" alt="YouTube" className="h-6 hidden sm:block" />
                  <img src="/youtube-icon.svg" alt="YouTube" className="h-8 sm:hidden" />
                </Link>
              </div>
              <div className="hidden sm:block flex-1 max-w-2xl mx-4">
                <form className="flex">
                  <Input type="search" placeholder="Search" className="rounded-r-none w-full" />
                  <Button type="submit" variant="secondary" className="rounded-l-none">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleSearch} className="sm:hidden">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Open search</span>
                </Button>
                <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                  <Video className="h-5 w-5" />
                  <span className="sr-only">Create</span>
                </Button>
                <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </div>
            </>
          )}
          {isSearchVisible && (
            <div className="flex items-center w-full">
              <Button variant="ghost" size="icon" onClick={toggleSearch} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
              <form className="flex w-full">
                <Input type="search" placeholder="Search" className="flex-1 rounded-r-none focus-visible:outline-0" />
                <Button type="submit" variant="secondary" className="rounded-l-none">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

