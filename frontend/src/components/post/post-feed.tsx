import { Post } from "./post";

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

export function PostFeed() {
  const posts: Post[] = [
    {
      id: 1,
      user: {
        name: "Alex Smith",
        username: "alex_smith",
        avatar: "/placeholder.svg",
      },
      content: {
        image: "/placeholder.svg?height=600&width=600",
        caption:
          "Beautiful sunset at the beach today! 🌅 #sunset #beach #summer",
        location: "Malibu Beach",
      },
      stats: {
        likes: 1243,
        comments: 42,
        timestamp: "2 hours ago",
      },
      liked: true,
      saved: false,
      comments: [
        {
          id: 101,
          user: {
            name: "Jessica Lee",
            username: "jessica_lee",
            avatar: "/placeholder.svg",
          },
          text: "Wow, this looks amazing! 😍",
          timestamp: "1 hour ago",
          likes: 24,
        },
        {
          id: 102,
          user: {
            name: "Mike Johnson",
            username: "mike_johnson",
            avatar: "/placeholder.svg",
          },
          text: "I need to visit this place!",
          timestamp: "45 minutes ago",
          likes: 12,
        },
      ],
    },
    {
      id: 2,
      user: {
        name: "Sarah Parker",
        username: "sarah_parker",
        avatar: "/placeholder.svg",
      },
      content: {
        image: "/placeholder.svg?height=600&width=600",
        caption:
          "Just finished this painting! What do you think? 🎨 #art #painting #creative",
        location: "Art Studio",
      },
      stats: {
        likes: 876,
        comments: 31,
        timestamp: "5 hours ago",
      },
      liked: false,
      saved: true,
      comments: [
        {
          id: 201,
          user: {
            name: "David Wilson",
            username: "david_wilson",
            avatar: "/placeholder.svg",
          },
          text: "This is incredible! You're so talented!",
          timestamp: "3 hours ago",
          likes: 18,
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
