import React, { useEffect, useState } from "react";
import "../App.css";
import GameCard from "../Components/GameCard";
import { useGlobalContext } from "./Context";
import Loader from "../Components/Loader.js";

function AllGames() {
  const { loading, setLoading, search } = useGlobalContext();
  const [allGames, setAllGames] = useState([]);
  const [page, setPage] = useState(5);
  const [pageSize, setPageSize] = useState(20);
  const [activeIndex, setActiveIndex] = useState(1);

  const fetchAllGames = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.rawg.io/api/games?key=578851ec530447278e864d8b9048a90b&page=${page}&page_size=${pageSize}&search=${search}`
    );
    const data = await response.json();
    setLoading(false);
    setAllGames(data.results);
  };

  useEffect(() => {
    fetchAllGames();
  }, [page, search]);
  return (
    <>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          allGames &&
          allGames.map((item) => {
            return <GameCard {...item} />;
          })
        )}
      </div>
      <div className="btn-container">
        {[...Array(200 / pageSize)].map((_, i) => {
          return (
            <button
              className={
                activeIndex == i + 1 ? "page-btn active-btn" : "page-btn"
              }
              onClick={() => {
                setPage(i + 1);
                setActiveIndex(i + 1);
              }}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default AllGames;
