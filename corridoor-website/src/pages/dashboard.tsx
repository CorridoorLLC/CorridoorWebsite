import React from "react";
import { Fragment } from "react";
import ImageUpload from "../components/dashboard/imageUpload";
import FloatingMenu from "@/components/allPages/floatingMenu";
const Dashboard: React.FC = () => {
  return (
    <Fragment>
      <FloatingMenu />
      <div className="h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500 flex flex-col items-center justify-center pt-4 md:pt-0">
        this is the dashboard
        <ImageUpload />

      </div>
    </Fragment>
  );
};
export default Dashboard;
