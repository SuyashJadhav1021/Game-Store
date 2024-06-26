import GameCard from "./GameCard";
import { useGlobalContext } from "../Pages/Context";
import "../App.css";

function GamesContainer() {
  const { gameList } = useGlobalContext();

  return (
    <>
      <div className="games-container">
        {gameList &&
          gameList.map((item) => {
            return <GameCard {...item} />;
          })}
      </div>
    </>
  );
}

export default GamesContainer;
