import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit, Info, Phone, Send, Video } from "lucide-react";

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      user: {
        name: "Alex Smith",
        username: "alex_smith",
        avatar: "/placeholder.svg",
        online: true,
      },
      lastMessage: {
        text: "Hey, how's it going?",
        time: "2m ago",
        isUnread: true,
      },
    },
    {
      id: 2,
      user: {
        name: "Jessica Lee",
        username: "jessica_lee",
        avatar: "/placeholder.svg",
        online: true,
      },
      lastMessage: {
        text: "The photos look amazing!",
        time: "1h ago",
        isUnread: false,
      },
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        username: "mike_johnson",
        avatar: "/placeholder.svg",
        online: false,
      },
      lastMessage: {
        text: "Let's meet up this weekend",
        time: "3h ago",
        isUnread: false,
      },
    },
    {
      id: 4,
      user: {
        name: "Sarah Parker",
        username: "sarah_parker",
        avatar: "/placeholder.svg",
        online: true,
      },
      lastMessage: {
        text: "Thanks for the recommendation!",
        time: "1d ago",
        isUnread: false,
      },
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hey, how's it going?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Pretty good! Just working on some new designs. How about you?",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "I'm doing well! Just got back from a photoshoot at the beach.",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "them",
      text: "The photos turned out amazing. I'll share them with you later!",
      time: "10:34 AM",
    },
    {
      id: 5,
      sender: "me",
      text: "That sounds awesome! Can't wait to see them.",
      time: "10:36 AM",
    },
    {
      id: 6,
      sender: "them",
      text: "Are you free this weekend? We could meet up for coffee.",
      time: "10:38 AM",
    },
    {
      id: 7,
      sender: "me",
      text: "Yeah, I should be free on Saturday afternoon. Where were you thinking?",
      time: "10:40 AM",
    },
    {
      id: 8,
      sender: "them",
      text: "How about that new place downtown? I heard they have great pastries.",
      time: "10:41 AM",
    },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] -mt-4 -mx-4">
      {/* Conversations List */}
      <div className="w-80 border-r hidden md:block">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Messages</h2>
          <Button variant="ghost" size="icon">
            <Edit className="h-5 w-5" />
            <span className="sr-only">New message</span>
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                  conversation.id === 1 ? "bg-accent" : "hover:bg-accent/50"
                }`}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={conversation.user.avatar}
                      alt={conversation.user.name}
                    />
                    <AvatarFallback>
                      {conversation.user.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.user.online && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-1 ring-background" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">
                      {conversation.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {conversation.lastMessage.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p
                      className={`text-sm truncate ${
                        conversation.lastMessage.isUnread
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {conversation.lastMessage.text}
                    </p>
                    {conversation.lastMessage.isUnread && (
                      <span className="block h-2 w-2 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Alex Smith" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Alex Smith</p>
              <p className="text-xs text-muted-foreground">Active now</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
              <span className="sr-only">Video call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5" />
              <span className="sr-only">Info</span>
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-lg ${
                    message.sender === "me"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <form className="flex items-center gap-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button type="submit" size="icon">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
