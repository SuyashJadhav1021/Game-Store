import React from "react";
import "./GameCard.css";
import { Link } from "react-router-dom";

function GameCard({ background_image, name, rating, ratings_count, id }) {
  return (
    <div className="game-card">
      <div className="header">
        <img src={background_image} alt="" />
      </div>
      <div className="footer">
        <div className="footer-name">
          <p className="name">{name}</p>
          <button>+{ratings_count}</button>
        </div>

        <div className="footer-info">
          <p className="rating">⭐{rating}</p>
        </div>
        <Link to={`/games/${id}`}>
          <button className="btn">See more</button>
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
