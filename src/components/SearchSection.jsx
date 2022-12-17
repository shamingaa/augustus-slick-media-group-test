const SearchSection = ({ searchWord, setSearchWord }) => {
  return (
    <div className="search-section">
      <span id="search-label">Search</span>
      <br />
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        id="search-input"
      />
    </div>
  );
};

export default SearchSection;
