import { cn } from "@/lib/utils"
import { SidebarNav } from "./sidebar-nav"
import { SidebarFriends } from "./sidebar-friends"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn("flex flex-col gap-6 p-4", className)}>
      <SidebarNav />
      <div className="border-t pt-4">
        <h3 className="text-sm font-medium mb-2">Friends</h3>
        <SidebarFriends />
      </div>
    </aside>
  )
}

