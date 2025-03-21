import { Link } from "react-router-dom";
import { Bell, Home, MessageCircle, PlusSquare, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { MobileMenu } from "./mobile-menu";
import { NotificationsPopover } from "./notifications-popover";
import { UserMenu } from "./user-menu";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background z-50">
      <div className="container h-full mx-auto px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl flex-shrink-0">
          SocialApp
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:flex relative max-w-md w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-muted/50"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <ModeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/messages">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/create">
              <PlusSquare className="h-5 w-5" />
              <span className="sr-only">Create</span>
            </Link>
          </Button>
          <NotificationsPopover>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </NotificationsPopover>

          <UserMenu />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
