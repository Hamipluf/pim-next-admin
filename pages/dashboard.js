import React from "react";
import VisualizeData from "../components/visualizeData";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

function dashboard() {
  return (
    <>
      <NavBar />
      <div className="bg-mainpim text-xl font-bold m-1 p-4 rounded-md text-lightpim">Dashboard</div>
      <VisualizeData />
      <Footer />
    </>
  );
}

export default dashboard;
