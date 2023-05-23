import { useRouter } from "next/router";
import HomePage from "../components/homepage/homePage";
import Dashboard from "./dashboard";
import Terms from "./terms";
import FloatingMenu from "@/components/allPages/floatingMenu";
import Login from "./login";
import AboutUs from "./aboutus";
import Footer from "@/components/allPages/footer";

export default function Home() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div>
      <FloatingMenu />
      <div className="flex-grow">
        {currentPath === "/" && <HomePage />}
        {currentPath === "/dashboard" && <Dashboard />}
        {currentPath === "/terms" && <Terms />}
        {currentPath === "/login" && <Login />}
        {currentPath === "/aboutus" && <AboutUs />}
      </div>

    </div>
  );
}


