import { Sidebar } from "./components/sidebar/sidebar";
import { Header } from "./components/header/header";
import { RightPanel } from "./components/right-panel/right-panel";
import { Routes, Route } from "react-router-dom";
import { PostFeed } from "./components/post/post-feed";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto flex gap-4 pt-16 px-4">
          <Sidebar className="hidden md:flex w-64 fixed h-[calc(100vh-4rem)] top-16 left-0 overflow-y-auto pb-6" />
          <main className="flex-1 md:ml-64 lg:mr-80 py-4">
            <Routes>
              <Route path="/" element={<PostFeed />} />
              <Route path="/profile" element={<div>Profile Page</div>} />
              <Route path="/messages" element={<div>Messages Page</div>} />
              <Route path="/explore" element={<div>Explore Page</div>} />
            </Routes>
          </main>
          <RightPanel className="hidden lg:flex w-80 fixed h-[calc(100vh-4rem)] top-16 right-0 overflow-y-auto pb-6" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
