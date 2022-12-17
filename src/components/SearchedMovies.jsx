import BeforeMovie from "./BeforeMovie";

const SearchedMovies = ({ moviesArr }) => {
  const { Search } = moviesArr;

  return (
    <>
      <span id="search-label">Movies</span>
      <div className="movies-container">
        <div className="searched-movies">
          {Search ? (
            Search.map(({ Title, Poster, imdbID }) => (
              <div className="card" key={imdbID} >
                <img src={Poster} alt=" movie poster" id="movie-poster" />
                <div id="movie-name">{Title}</div>
              </div>
            ))
          ) : (
            <BeforeMovie />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchedMovies;
