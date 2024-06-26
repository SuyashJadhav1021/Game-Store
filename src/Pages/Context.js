import React, { useEffect, useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const key = "578851ec530447278e864d8b9048a90b";
const url = "https://api.rawg.io/api/genres";

const AppProvider = ({ children }) => {
  const [gameList, setGameList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [genreId, setGenreId] = useState(4);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  console.log("genreId" + genreId);
  const getGenreId = (id) => {
    setGenreId(id);
  };

  const fetchGamesGenre = async () => {
    setLoading(true);
    const response = await fetch(
      "https://api.rawg.io/api/genres?key=578851ec530447278e864d8b9048a90b"
    );

    const data = await response.json();
    setGenreList(data.results);
    setLoading(false);
  };

  const fetchGamesById = async (id) => {
    setLoading(true);
    const response = await fetch(
      `https://api.rawg.io/api/games?key=578851ec530447278e864d8b9048a90b&genres=${id}&search=${search}`
    );

    const result = await response.json();
    setGameList(result.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchGamesGenre();
  }, []);

  useEffect(() => {
    fetchGamesById(genreId);
  }, [genreId, search]);

  // useEffect(() => {
  //   fetchGamesById(genreId);
  // }, [search]);

  return (
    <AppContext.Provider
      value={{
        genreList,
        gameList,
        loading,
        search,
        getGenreId,
        fetchGamesById,
        setLoading,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
