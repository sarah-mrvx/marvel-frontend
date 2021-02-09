import FavoritesList from "../components/FavoritesList";

const Favorites = (props) => {
  const { favorite, setFavorite } = props;
  return (
    <div>
      <FavoritesList favorite={favorite} setFavorite={setFavorite} />
    </div>
  );
};
export default Favorites;
