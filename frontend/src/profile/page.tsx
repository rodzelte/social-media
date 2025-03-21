import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ExplorePost {
  id: number;
  image: string;
  size: "large" | "small";
}

export default function ExplorePage() {
  const explorePosts: ExplorePost[] = [
    { id: 1, image: "/placeholder.svg?height=400&width=400", size: "large" },
    { id: 2, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 3, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 4, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 5, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 6, image: "/placeholder.svg?height=400&width=400", size: "large" },
    { id: 7, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 8, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 9, image: "/placeholder.svg?height=400&width=400", size: "large" },
    { id: 10, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 11, image: "/placeholder.svg?height=200&width=200", size: "small" },
    { id: 12, image: "/placeholder.svg?height=200&width=200", size: "small" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search" className="pl-10" />
        </div>

        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>

          <TabsContent value="for-you" className="mt-4">
            <div className="grid grid-cols-3 gap-1">
              {explorePosts.map((post) => (
                <div
                  key={post.id}
                  className={`relative ${
                    post.size === "large"
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <div className="aspect-square w-full h-full relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Explore post"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="flex items-center justify-center h-40 border rounded-md">
              <p className="text-muted-foreground">Trending content</p>
            </div>
          </TabsContent>

          <TabsContent value="photography">
            <div className="flex items-center justify-center h-40 border rounded-md">
              <p className="text-muted-foreground">Photography content</p>
            </div>
          </TabsContent>

          <TabsContent value="travel">
            <div className="flex items-center justify-center h-40 border rounded-md">
              <p className="text-muted-foreground">Travel content</p>
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="flex items-center justify-center h-40 border rounded-md">
              <p className="text-muted-foreground">Food content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
