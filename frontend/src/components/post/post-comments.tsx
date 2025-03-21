import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface User {
  name: string;
  username: string;
  avatar: string;
}

interface Comment {
  id: number;
  user: User;
  text: string;
  timestamp: string;
  likes: number;
}

interface PostCommentsProps {
  comments: Comment[];
}

export function PostComments({ comments }: PostCommentsProps) {
  return (
    <div className="w-full space-y-3 pt-2">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
            <AvatarFallback>
              {comment.user.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-start justify-between">
              <div className="text-sm">
                <Link
                  to={`/profile/${comment.user.username}`}
                  className="font-medium hover:underline"
                >
                  {comment.user.username}
                </Link>{" "}
                {comment.text}
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Heart className="h-3 w-3" />
                <span className="sr-only">Like</span>
              </Button>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{comment.timestamp}</span>
              <span>{comment.likes} likes</span>
              <button className="font-medium">Reply</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
