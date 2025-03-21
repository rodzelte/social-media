import { OnlineFriends } from "./online-friends";
import { SuggestedUsers } from "./suggested-users";
import { TrendingTopics } from "./trending-topics";
import clsx from "clsx"; // Optional utility for conditional class merging

interface RightPanelProps {
  className?: string; // Allow optional className prop
}

export function RightPanel({ className }: RightPanelProps) {
  return (
    <aside
      className={clsx(
        "fixed top-16 right-0 bottom-0 w-[320px] border-l hidden lg:block p-4 overflow-y-auto",
        className
      )}
    >
      <div className="flex flex-col space-y-6">
        <OnlineFriends />
        <SuggestedUsers />
        <TrendingTopics />
      </div>
    </aside>
  );
}
