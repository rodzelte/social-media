import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { StoryItem } from "./story-item"

export function StoryBar() {
  const stories = [
    { id: 1, username: "your_story", avatar: "/placeholder.svg", isYourStory: true, hasUnseenStory: false },
    { id: 2, username: "alex_smith", avatar: "/placeholder.svg", isYourStory: false, hasUnseenStory: true },
    { id: 3, username: "jessica_lee", avatar: "/placeholder.svg", isYourStory: false, hasUnseenStory: true },
    { id: 4, username: "mike_johnson", avatar: "/placeholder.svg", isYourStory: false, hasUnseenStory: true },
    { id: 5, username: "sarah_parker", avatar: "/placeholder.svg", isYourStory: false, hasUnseenStory: false },
    { id: 6, username: "david_wilson", avatar: "/placeholder.svg", isYourStory: false, hasUnseenStory: true },
    { id: 7, username: "emma_brown", avatar: "/placeholder.svg", isYourStory: false, hasUnseenStory: true },
    { id: 8, username: "james_taylor", avatar: "/placeholder.svg", isYourStory: false, hasUnseenStory: false },
  ]

  return (
    <div className="mb-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-4 p-1">
          {stories.map((story) => (
            <StoryItem
              key={story.id}
              username={story.username}
              avatar={story.avatar}
              isYourStory={story.isYourStory}
              hasUnseenStory={story.hasUnseenStory}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

