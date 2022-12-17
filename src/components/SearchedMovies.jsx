const SearchedMovies = ({ movies }) => {
  return (
    <>
      <span id="search-label">Movies</span>
      <div className="movies-container">
        <div className="searched-movies">
          {movies.map(({ Title, Poster }) => (
            <div className="card">
              <img src={Poster} alt=" movie poster" id="movie-poster" />
              <div id="movie-name">{Title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchedMovies;
