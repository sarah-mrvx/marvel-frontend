const FavoritesList = (props) => {
  const { favorite, setFavorite } = props;

  const empty = favorite.length === 0;

  const removeFavorite = (character) => {
    const exist = favorite.find(
      (favoriteCharacter) => favoriteCharacter.id === character.id
    );
    if (exist) {
      const newFavoriteList = [...favorite];
      const remove = newFavoriteList.filter(
        (removeCharacter) => removeCharacter.id !== character.id
      );
      setFavorite(remove);
    }
  };

  return (
    <div>
      <h1>Your favorites list</h1>
      {empty ? (
        <div>
          <div>Your favorites list is empty</div>
        </div>
      ) : (
        <div>
          <div className="list">
            {favorite.map((favoriteCharacter) => (
              <div key={favoriteCharacter.id}>
                <div className="characterBox">
                  <div className="favoritePicture">
                    <button
                      className="favoriteButton"
                      onClick={() => removeFavorite(favoriteCharacter)}
                    >
                      Remove favorite
                    </button>
                    {favoriteCharacter.picture && (
                      <img
                        src={`${favoriteCharacter.picture}/standard_medium.jpg`}
                        alt={favoriteCharacter.name}
                      />
                    )}
                  </div>

                  {favoriteCharacter.name && (
                    <div>Name: {favoriteCharacter.name}</div>
                  )}
                  {favoriteCharacter.description && (
                    <div>Description: {favoriteCharacter.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};
export default FavoritesList;
