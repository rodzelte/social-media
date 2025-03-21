import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function SuggestedUsers() {
  const suggestedUsers = [
    {
      id: 1,
      name: "Emma Brown",
      username: "emma_brown",
      avatar: "/avatars/06.png",
    },
    {
      id: 2,
      name: "Daniel White",
      username: "daniel_white",
      avatar: "/avatars/09.png",
    },
    {
      id: 3,
      name: "Sophia Miller",
      username: "sophia_miller",
      avatar: "/avatars/10.png",
    },
  ];

  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium">Suggested For You</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-4 pb-4 space-y-3">
          {suggestedUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    @{user.username}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
