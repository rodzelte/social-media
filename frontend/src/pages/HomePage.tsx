import { StoryBar } from "@/components/story/story-bar";
import { PostFeed } from "@/components/post/post-feed";

export default function HomePage() {
  return (
    <div className="max-w-xl mx-auto">
      <StoryBar />
      <PostFeed />
    </div>
  );
}
