const SearchCharacters = (props) => {
  const { setSearchCharacter } = props;

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchCharacter(value);
  };

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search character"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchCharacters;
