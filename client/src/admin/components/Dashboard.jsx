import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <div className="bg-[#F0F0F0]">
          <div className=" bg-white my-[6vmax] ">
            <h1 className="text-[#00286b] text-3xl font-bold border-b-4 border-[#00286b] pb-2 w-fit mx-auto">
              Dashboard
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
