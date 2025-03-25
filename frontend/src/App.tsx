import AuthForms from "@/components/auth-forms";
import { ThemeProvider } from "./components/theme-provider";
// import HomeRoutes from "./pages/RouteHome";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <HomeRoutes /> */}
      <AuthForms />
    </ThemeProvider>
  );
}

export default App;
