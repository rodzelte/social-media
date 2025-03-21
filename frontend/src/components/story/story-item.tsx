import { Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface StoryItemProps {
  username: string
  avatar: string
  isYourStory: boolean
  hasUnseenStory: boolean
}

export function StoryItem({ username, avatar, isYourStory, hasUnseenStory }: StoryItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`p-[2px] rounded-full ${
          hasUnseenStory ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600" : "bg-transparent"
        }`}
      >
        <div className="bg-background p-[2px] rounded-full">
          <Avatar className="h-14 w-14 border-2 border-background">
            <AvatarImage src={avatar} alt={username} />
            <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          {isYourStory && (
            <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Plus className="h-3 w-3" />
            </div>
          )}
        </div>
      </div>
      <span className="text-xs truncate max-w-[64px]">{isYourStory ? "Your story" : username}</span>
    </div>
  )
}

