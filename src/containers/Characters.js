import React, { useState, useEffect } from "react";
import axios from "axios";
import CharactersList from "../components/CharactersList";
import SearchCharacters from "../components/SearchCharacters";

const Characters = (props) => {
  const { favorite, setFavorite } = props;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [skip, setSkip] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backeend.herokuapp.com/characters?name=${searchCharacter}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        alert("An error occurred" + e);
      }
    };
    fetchData();
  }, [searchCharacter, skip]);

  const next = () => {
    setSkip(skip + 100);
  };
  const previous = () => {
    setSkip(skip - 100);
  };

  return isLoading ? (
    <span>Loading... </span>
  ) : (
    <div>
      <div className="titleCharacterComics">
        <h1>MARVEL CHARACTERS LIST</h1>

        <SearchCharacters setSearchCharacter={setSearchCharacter} />
      </div>

      <div className="list">
        {data.map((character) => {
          return (
            <div key={character._id}>
              <CharactersList
                name={character.name}
                description={character.description}
                picture={character.thumbnail.path}
                id={character._id}
                favorite={favorite}
                setFavorite={setFavorite}
              />
            </div>
          );
        })}
      </div>

      <button onClick={() => next()}>Next</button>
      {skip > 0 && <button onClick={() => previous()}>Previous</button>}
    </div>
  );
};
export default Characters;
