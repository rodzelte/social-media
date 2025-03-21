import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MobileSidebar } from "../sidebar/mobile-sidebar";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>SocialApp</SheetTitle>
        </SheetHeader>
        <MobileSidebar />
      </SheetContent>
    </Sheet>
  );
}
