import type React from "react";
import { Heart, MessageCircle, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface NotificationsPopoverProps {
  children: React.ReactNode;
}

function NotificationItem({
  avatar,
  username,
  action,
  time,
  icon,
}: {
  avatar: string;
  username: string;
  action: string;
  time: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 p-3 hover:bg-muted/50">
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} alt={username} />
        <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm">
          <span className="font-medium">{username}</span> {action}
        </p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
      <div className="text-muted-foreground">{icon}</div>
    </div>
  );
}

export function NotificationsPopover({ children }: NotificationsPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Tabs defaultValue="all">
          <div className="border-b px-3 py-2">
            <h4 className="text-sm font-medium">Notifications</h4>
          </div>
          <TabsList className="w-full justify-start rounded-none border-b px-3">
            <TabsTrigger
              value="all"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="mentions"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Mentions
            </TabsTrigger>
          </TabsList>
          <ScrollArea className="h-[400px]">
            <TabsContent value="all" className="mt-0">
              <div className="divide-y">
                <NotificationItem
                  avatar="/avatars/01.png"
                  username="John Doe"
                  action="liked your post"
                  time="2 minutes ago"
                  icon={<Heart className="h-4 w-4" />}
                />
                <NotificationItem
                  avatar="/avatars/02.png"
                  username="Jane Smith"
                  action="commented on your post"
                  time="1 hour ago"
                  icon={<MessageCircle className="h-4 w-4" />}
                />
                <NotificationItem
                  avatar="/avatars/03.png"
                  username="Mike Johnson"
                  action="followed you"
                  time="2 hours ago"
                  icon={<UserPlus className="h-4 w-4" />}
                />
              </div>
            </TabsContent>
            <TabsContent value="mentions" className="mt-0">
              <div className="divide-y">
                <NotificationItem
                  avatar="/avatars/02.png"
                  username="Jane Smith"
                  action="mentioned you in a comment"
                  time="1 hour ago"
                  icon={<MessageCircle className="h-4 w-4" />}
                />
              </div>
            </TabsContent>
          </ScrollArea>
          <div className="border-t p-3">
            <button className="text-sm text-muted-foreground hover:text-foreground">
              View all notifications
            </button>
          </div>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
