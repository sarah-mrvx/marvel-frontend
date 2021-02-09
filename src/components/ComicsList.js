const ComicsList = (props) => {
  const { title, description, picture } = props;

  return (
    <div className="comicsBox">
      <img
        className="picture"
        src={`${picture}/standard_medium.jpg`}
        alt={title}
      />

      <div>
        <div>Title : {title}</div>
        {description && <div>Description : {description}</div>}
      </div>
    </div>
  );
};
export default ComicsList;
