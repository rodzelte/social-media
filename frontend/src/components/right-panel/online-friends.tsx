import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function OnlineFriends() {
  const onlineFriends = [
    { id: 1, name: "Alex Smith", avatar: "/avatars/01.png" },
    { id: 2, name: "Jessica Lee", avatar: "/avatars/02.png" },
    { id: 4, name: "Sarah Parker", avatar: "/avatars/04.png" },
    { id: 7, name: "James Taylor", avatar: "/avatars/07.png" },
  ];

  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium">Online Friends</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[150px]">
          <div className="px-4 pb-4 space-y-2">
            {onlineFriends.map((friend) => (
              <div key={friend.id} className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>
                      {friend.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-background" />
                </div>
                <span className="text-sm">{friend.name}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
