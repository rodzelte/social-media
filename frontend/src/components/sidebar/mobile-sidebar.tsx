import { SidebarNav } from "./sidebar-nav"
import { SidebarFriends } from "./sidebar-friends"

export function MobileSidebar() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <SidebarNav />
      <div className="border-t pt-4">
        <h3 className="text-sm font-medium mb-2">Friends</h3>
        <SidebarFriends />
      </div>
    </div>
  )
}

