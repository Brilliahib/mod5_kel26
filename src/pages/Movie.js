import { Fragment } from "react";
import CardBig from "../components/CardBig";
import CardSmall from "../components/CardSmall";
import "./Movie.css";
import { useNavigate } from "react-router-dom";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate();

  const poster = [
    {
      title: "John Wick: Chapter 4",
      id: 1,
      rate: 4.5,
      genre: "Action, Crime",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6X1sACw0mXLCMG-KBzbHNmN5ZgrD39xpkQ&s",
    },
    {
      title: "The Batman",
      id: 2,
      rate: 4.7,
      genre: "Action, Crime, Drama",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzzFYczgufsR1VZbadYvtIvRKYnNnb8tz9w&s",
    },
    {
      title: "Dune",
      id: 3,
      rate: 4.6,
      genre: "Adventure, Drama, Sci-Fi",
      img: "https://images.squarespace-cdn.com/content/v1/552672afe4b0c26feae01486/1637782853123-J37VI8VX2QL82KJP5U5W/DUNE_Indy_Movie_Poster_1.jpeg?format=500w",
    },
  ];

  const data = [
    {
      title: "John Wick: Chapter 4",
      id: 1,
      rate: 4.5,
      genre: "Action, Crime",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6X1sACw0mXLCMG-KBzbHNmN5ZgrD39xpkQ&s",
    },
    {
      title: "The Batman",
      id: 2,
      rate: 4.7,
      genre: "Action, Crime, Drama",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzzFYczgufsR1VZbadYvtIvRKYnNnb8tz9w&s",
    },
    {
      title: "Dune",
      id: 3,
      rate: 4.6,
      genre: "Adventure, Drama, Sci-Fi",
      img: "https://images.squarespace-cdn.com/content/v1/552672afe4b0c26feae01486/1637782853123-J37VI8VX2QL82KJP5U5W/DUNE_Indy_Movie_Poster_1.jpeg?format=500w",
    },
    {
      title: "John Wick: Chapter 4",
      id: 1,
      rate: 4.5,
      genre: "Action, Crime",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6X1sACw0mXLCMG-KBzbHNmN5ZgrD39xpkQ&s",
    },
    {
      title: "The Batman",
      id: 2,
      rate: 4.7,
      genre: "Action, Crime, Drama",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzzFYczgufsR1VZbadYvtIvRKYnNnb8tz9w&s",
    },
    {
      title: "Dune",
      id: 3,
      rate: 4.6,
      genre: "Adventure, Drama, Sci-Fi",
      img: "https://images.squarespace-cdn.com/content/v1/552672afe4b0c26feae01486/1637782853123-J37VI8VX2QL82KJP5U5W/DUNE_Indy_Movie_Poster_1.jpeg?format=500w",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
            />
            {poster.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => handleCardClick(item.id)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => handleCardClick(item.id)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
