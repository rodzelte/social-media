import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { PostComments } from "./post-comments";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface User {
  name: string;
  username: string;
  avatar: string;
}

interface PostContent {
  image?: string;
  caption: string;
  location?: string;
}

interface PostStats {
  likes: number;
  comments: number;
  timestamp: string;
}

interface Comment {
  id: number;
  user: User;
  text: string;
  timestamp: string;
  likes: number;
}

interface Post {
  id: number;
  user: User;
  content: PostContent;
  stats: PostStats;
  liked: boolean;
  saved: boolean;
  comments: Comment[];
}

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likesCount, setLikesCount] = useState(post.stats.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, you would add the comment to the database
      // and then update the UI
      setNewComment("");
      setShowComments(true);
    }
  };

  return (
    <Card>
      <CardHeader className="p-4 space-y-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.user.avatar} alt={post.user.name} />
              <AvatarFallback>
                {post.user.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1">
                <Link
                  to={`/profile/${post.user.username}`}
                  className="text-sm font-medium hover:underline"
                >
                  {post.user.username}
                </Link>
                {post.content.location && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <Link
                      to={`/explore/locations/${encodeURIComponent(
                        post.content.location
                      )}`}
                      className="text-xs text-muted-foreground hover:underline"
                    >
                      {post.content.location}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Go to post</DropdownMenuItem>
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <img
            src={post.content.image || "/placeholder.svg"}
            alt="Post image"
            className="object-cover w-full h-full"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 pt-3 space-y-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={handleLike}
            >
              <Heart
                className={`h-6 w-6 ${
                  liked ? "fill-red-500 text-red-500" : ""
                }`}
              />
              <span className="sr-only">Like</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Send className="h-6 w-6" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={handleSave}
          >
            <Bookmark className={`h-6 w-6 ${saved ? "fill-current" : ""}`} />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        <div className="space-y-1 w-full">
          <p className="text-sm font-medium">
            {likesCount.toLocaleString()} likes
          </p>
          <div className="text-sm">
            <Link
              to={`/profile/${post.user.username}`}
              className="font-medium hover:underline"
            >
              {post.user.username}
            </Link>{" "}
            {post.content.caption}
          </div>
          {post.comments.length > 0 && (
            <button
              className="text-sm text-muted-foreground"
              onClick={() => setShowComments(!showComments)}
            >
              View all {post.stats.comments} comments
            </button>
          )}
          <p className="text-xs text-muted-foreground uppercase">
            {post.stats.timestamp}
          </p>
        </div>
        {showComments && <PostComments comments={post.comments} />}
        <form
          onSubmit={handleAddComment}
          className="flex w-full gap-2 pt-3 border-t"
        >
          <Input
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="h-9 bg-transparent border-none shadow-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className="text-primary"
            disabled={!newComment.trim()}
          >
            Post
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
