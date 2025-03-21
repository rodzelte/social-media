import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Home, PlusSquare, Search, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNavigation() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: PlusSquare, label: "Create", href: "/create" },
    { icon: Heart, label: "Notifications", href: "/notifications" },
    { icon: User, label: "Profile", href: "/profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background md:hidden z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 py-3 px-4",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

