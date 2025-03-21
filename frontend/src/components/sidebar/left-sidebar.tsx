"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bookmark, Compass, Heart, Home, MessageCircle, PlusSquare, Search, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { SidebarFriends } from "./sidebar-friends"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function LeftSidebar() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    { icon: Heart, label: "Notifications", href: "/notifications" },
    { icon: PlusSquare, label: "Create", href: "/create" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Bookmark, label: "Saved", href: "/saved" },
  ]

  return (
    <aside className="fixed top-16 left-0 bottom-0 w-[240px] border-r hidden md:block p-4 overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="space-y-1 mb-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent/50 hover:text-accent-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="border-t pt-4 flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">Friends</h3>
            <Link href="/friends" className="text-xs text-primary hover:underline">
              See All
            </Link>
          </div>
          <SidebarFriends />
        </div>

        <div className="border-t pt-4 mt-auto">
          <Link href="/profile" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/50">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="@username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">username</p>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  )
}

