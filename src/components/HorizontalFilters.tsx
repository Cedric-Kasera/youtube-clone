import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

const filters = [
  "All", "Music", "Gaming", "Movies", "Live", "News", "Sports", "Learning", "Fashion & Beauty",
  "Podcasts", "Travel", "Food", "Arts", "History", "Science & Technology"
]

const HorizontalFilters = () => {
  return (
    <div className="bg-white sticky top-16 z-10 mb-4">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 p-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant="secondary"
              className="rounded-full text-sm font-medium"
              size="sm"
            >
              {filter}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

export default HorizontalFilters

