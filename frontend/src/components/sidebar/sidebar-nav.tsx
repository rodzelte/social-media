import { Link } from "react-router-dom";
import {
  Bookmark,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
  User,
} from "lucide-react";
import { Button } from "../ui/button";

export function SidebarNav() {
  return (
    <nav className="space-y-1">
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/">
          <Home className="mr-2 h-5 w-5" />
          Home
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/search">
          <Search className="mr-2 h-5 w-5" />
          Search
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/explore">
          <Compass className="mr-2 h-5 w-5" />
          Explore
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/messages">
          <MessageCircle className="mr-2 h-5 w-5" />
          Messages
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/notifications">
          <Heart className="mr-2 h-5 w-5" />
          Notifications
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/create">
          <PlusSquare className="mr-2 h-5 w-5" />
          Create
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/profile">
          <User className="mr-2 h-5 w-5" />
          Profile
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/bookmarks">
          <Bookmark className="mr-2 h-5 w-5" />
          Bookmarks
        </Link>
      </Button>
    </nav>
  );
}
