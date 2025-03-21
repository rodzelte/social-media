import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

export function SidebarFriends() {
  const friends = [
    { id: 1, name: "Alex Smith", avatar: "/avatars/01.png", online: true },
    { id: 2, name: "Jessica Lee", avatar: "/avatars/02.png", online: true },
    { id: 3, name: "Mike Johnson", avatar: "/avatars/03.png", online: false },
    { id: 4, name: "Sarah Parker", avatar: "/avatars/04.png", online: true },
    { id: 5, name: "David Wilson", avatar: "/avatars/05.png", online: false },
    { id: 6, name: "Emma Brown", avatar: "/avatars/06.png", online: false },
    { id: 7, name: "James Taylor", avatar: "/avatars/07.png", online: true },
    { id: 8, name: "Olivia Davis", avatar: "/avatars/08.png", online: false },
  ];

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-2">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={friend.avatar} alt={friend.name} />
              <AvatarFallback>
                {friend.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{friend.name}</p>
              <div className="flex items-center gap-1">
                <span
                  className={`h-2 w-2 rounded-full ${
                    friend.online ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
                <span className="text-xs text-muted-foreground">
                  {friend.online ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
