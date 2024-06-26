import React, { useRef } from "react";
import "./Header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useGlobalContext } from "../Pages/Context";
import { Link } from "react-router-dom";

function Header() {
  const { setSearch } = useGlobalContext();
  const searchValue = useRef("");
  console.log(searchValue);

  const handleSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <nav>
      <Link className="logo" to="/">
        <div className="logo">
          <img src="./images/gamepad-logo.png" alt="Logo" />
        </div>
      </Link>

      {/* <ul> */}
      <div className="search-box">
        <input
          type="text"
          className="input"
          placeholder="e.g. Grand Theft Auto"
          onChange={handleSearch}
        />
        <FaMagnifyingGlass className="search-icon" />
      </div>
      <ul>
        <Link to={"/all games"} className="all-games">
          <p className="game-btn">All Games</p>
        </Link>
      </ul>
      {/*
        <li>
          {" "}
          <a href="">Wishlist</a>
        </li>
        <li>
          {" "}
          <a href="">Cart</a>
        </li>
      </ul> */}
    </nav>
  );
}

export default Header;
