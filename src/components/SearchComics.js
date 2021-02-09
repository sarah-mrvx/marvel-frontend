const SearchComics = (props) => {
  const { setSearchComic } = props;

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchComic(value);
  };

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search comics"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComics;
