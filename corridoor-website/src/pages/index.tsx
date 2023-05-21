import { useRouter } from "next/router";
import HomePage from "../components/homepage/homePage";
import Dashboard from "./dashboard";
import Terms from "./terms";
import FloatingMenu from "@/components/allPages/floatingMenu";
import Login from "./login";
import AboutUs from "./aboutus";


export default function Home() {
  const router = useRouter();
  const currentPath = router.pathname;
  //need to setup the login api call right here
  //initialize firebase
  const handleSignup = (
    name: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
  ) => {
    // Handle the login logic here (e.g., make an API call)
    console.log("Signup with", name, lastname, email, phone, password);
  };

  return (
    <div className="radial-gradient(at right top, rgb(88, 28, 135), rgb(192, 38, 211), rgb(157, 23, 77))">
      <FloatingMenu />
      {currentPath === "/" && <HomePage />}
      {currentPath === "/dashboard" && <Dashboard />}
      {currentPath === "/terms" && <Terms />}
      {currentPath === "/login" && <Login />}
      {currentPath === "/aboutus" && <AboutUs />}
    </div>
  );
}
