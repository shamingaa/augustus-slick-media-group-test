import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import SearchedMovies from "./components/SearchedMovies";
import SearchSection from "./components/SearchSection";
import TopNavBar from "./components/TopNavBar";

function App() {
  const [movies, setMovies] = useState([  ]);

  useEffect(() => {
    const getMovies = async (searchWord) => {
      const response = await fetch(`https://omdbapi.com/?s=${searchWord}&apikey=c86d14a6`)
      const data = await response.json()
      setMovies(data)
    }
    getMovies("iron")
  }, [])

  return (
    <div className="App">
      <TopNavBar />
      <Banner />
      <div className="movies-section">
        <SearchSection />
        <SearchedMovies moviesArr={movies} />
      </div>
    </div>
  );
}

export default App;
