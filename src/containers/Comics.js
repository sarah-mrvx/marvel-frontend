import React, { useState, useEffect } from "react";
import axios from "axios";
import ComicsList from "../components/ComicsList";
import SearchComics from "../components/SearchComics";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchComic, setSearchComic] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backeend.herokuapp.com/comics?title=${searchComic}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        alert("An error occurred" + e);
      }
    };
    fetchData();
  }, [searchComic]);

  return isLoading ? (
    <span>Loading... </span>
  ) : (
    <div>
      <div className="titleCharacterComics">
        <h1>MARVEL COMICS LIST</h1>
        <SearchComics setSearchComic={setSearchComic} />
      </div>

      <div className="list">
        {data.map((comics, index) => {
          index = comics._id;
          return (
            <ComicsList
              title={comics.title}
              description={comics.description}
              picture={comics.thumbnail.path}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Comics;
