import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function TrendingTopics() {
  const trendingTopics = [
    { id: 1, name: "#photography", posts: "10.5k posts" },
    { id: 2, name: "#travel", posts: "8.2k posts" },
    { id: 3, name: "#food", posts: "7.1k posts" },
    { id: 4, name: "#fashion", posts: "6.8k posts" },
    { id: 5, name: "#fitness", posts: "5.3k posts" },
  ];

  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium">Trending Topics</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-4 pb-4 space-y-2">
          {trendingTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-2 rounded-md hover:bg-muted/50 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{topic.name}</span>
                <span className="text-xs text-muted-foreground">
                  {topic.posts}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
