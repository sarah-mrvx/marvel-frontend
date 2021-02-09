import { useState } from "react";

const CharactersList = (props) => {
  const { name, description, picture, id, favorite, setFavorite } = props;
  const [status, setStatus] = useState(false);

  const addRemoveFavorite = (character) => {
    const exist = favorite.find(
      (favoriteCharacter) => favoriteCharacter.id === character.id
    );
    if (!exist) {
      JSON.parse(localStorage.getItem("Favorite Marvel"));

      const newFavoriteList = [...favorite];
      console.log(newFavoriteList);
      newFavoriteList.push({
        id: character.id,
        name: character.name,
        description: character.description,
        picture: character.picture,
      });
      setStatus(true);
      setFavorite(newFavoriteList);

      localStorage.setItem("Favorite Marvel", JSON.stringify(favorite));
    } else {
      const newFavoriteList = [...favorite];
      const remove = newFavoriteList.filter(
        (removeCharacter) => removeCharacter.id !== character.id
      );
      setFavorite(remove);
      setStatus(false);
    }
  };

  const character = {
    name: name,
    description: description,
    picture: picture,
    id: id,
  };
  return (
    <div className="characterBox">
      <div className="favoritePicture">
        {!!status ? (
          <button
            className="favoriteButton"
            onClick={() => addRemoveFavorite(character)}
          >
            Remove favorite
          </button>
        ) : (
          <button
            className="favoriteButton"
            onClick={() => addRemoveFavorite(character)}
          >
            Add favorite
          </button>
        )}
        {picture && (
          <img
            className="picture"
            src={`${picture}/standard_medium.jpg`}
            alt={name}
          />
        )}
      </div>
      <div>
        <div>
          {name && <div className="marginBottom">Name: {name}</div>}
          {description && <div>Description: {description}</div>}
        </div>
      </div>
    </div>
  );
};
export default CharactersList;
