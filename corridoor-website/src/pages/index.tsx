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

  const handleSignup = (
    name: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
  ) => {
    console.log("Signup with", name, lastname, email, phone, password);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen radial-gradient(at right top, rgb(88, 28, 135), rgb(192, 38, 211), rgb(157, 23, 77))">
      <FloatingMenu />
      <div className="flex-grow">
        {currentPath === "/" && <HomePage />}
        {currentPath === "/dashboard" && <Dashboard />}
        {currentPath === "/terms" && <Terms />}
        {currentPath === "/login" && <Login />}
        {currentPath === "/aboutus" && <AboutUs />}
      </div>
      <Footer />
    </div>
  );
}


