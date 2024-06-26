import React from "react";
import Sidebar from "../Components/Sidebar";
import GamesContainer from "../Components/GamesContainer";
import "../App.css";
import Loader from "../Components/Loader";
import { useGlobalContext } from "./Context";

function Home() {
  const { loading } = useGlobalContext();
  return (
    <>
      <div className="home-container">
        <Sidebar />
        {loading ? <Loader /> : <GamesContainer />}
      </div>
    </>
  );
}

export default Home;
