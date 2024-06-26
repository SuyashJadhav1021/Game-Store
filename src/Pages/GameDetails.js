import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Components/GameDetails.css";
import Loader from "../Components/Loader.js";
import { useGlobalContext } from "./Context.js";

const GameDetails = () => {
  const { id } = useParams();
  const { loading, setLoading } = useGlobalContext();
  const [game, setGame] = useState(null);
  // const {}
  console.log(game);

  const fetchSingleGame = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=578851ec530447278e864d8b9048a90b`
    );
    const result = await response.json();
    setGame(result);
    setLoading(false);
  };
  console.log(game);

  // const fetchSimilarGames = async () => {
  //   const response = await fetch(

  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };

  // useEffect(() => {
  //   fetchSimilarGames();
  // }, []);

  useEffect(() => {
    fetchSingleGame();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        game && (
          <div className="single-game-container">
            <p className="title">{game.name}</p>
            <div className="product-content">
              <div className="left">
                <img src={game.background_image} alt={game.name} />
              </div>
              <div className="right">
                <div className="info-header">
                  <h3>Game Details</h3>
                  <p className="description">{game.description_raw}</p>
                </div>
                <div className="info-footer">
                  <li className="release-date">
                    <span>RELEASED DATE: </span>
                    {game.released}
                  </li>
                  <li className="ratings">
                    <span>RATINGS: ⭐</span>
                    {game.rating}
                  </li>
                  <span>GENRES:</span>
                  {game.genres.map((item) => {
                    return <button className="genres">{item.name}</button>;
                  })}
                  <br />
                  <span>PUBLISHERS: </span>
                  {game.publishers.map((item) => {
                    return (
                      <span className="publishers-names">{item.name}</span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="btn-primary">
              <Link to="/">
                <button className="btn-home">Return to Home</button>
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default GameDetails;
