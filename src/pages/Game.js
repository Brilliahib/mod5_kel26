import { Fragment } from "react";
import CardBig from "../components/CardBig";
import CardSmall from "../components/CardSmall";
import { useNavigate } from "react-router-dom";

export default function Games() {
  const STAR_COLOR = "rgb(255, 193, 7)"; // Change the color for Games
  const STAR_SIZE = 20;
  const navigate = useNavigate();

  // Data for featured games (CardBig)
  const poster = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      id: 1,
      rate: 5,
      genre: "Action, Adventure",
      img: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    },
    {
      title: "God of War",
      id: 2,
      rate: 5,
      genre: "Action, RPG",
      img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      id: 3,
      rate: 5,
      genre: "Action, RPG",
      img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    },
  ];

  // Data for all games (CardSmall)
  const data = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      id: 7,
      rate: 5,
      genre: "Action, Adventure",
      img: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    },
    {
      title: "God of War",
      id: 8,
      rate: 5,
      genre: "Action, RPG",
      img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      id: 9,
      rate: 5,
      genre: "Action, RPG",
      img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    },
    {
      title: "Ghost of Tsushima",
      id: 4,
      rate: 4,
      genre: "Action, Adventure",
      img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Ghost_of_Tsushima.jpg",
    },
    {
      title: "Cyberpunk 2077",
      id: 5,
      rate: 3,
      genre: "RPG, Open-world",
      img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    },
    {
      title: "Assassin's Creed Valhalla",
      id: 6,
      rate: 4,
      genre: "Action, RPG",
      img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Assassin%27s_Creed_Valhalla_cover_art.jpg",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <p id="games" className="text-2xl font-bold mb-4">
        Top Games
      </p>
      <div className="flex space-x-4 overflow-x-auto">
        {poster.map((item) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
              onClick={() => handleCardClick(item.id)}
            />
          </Fragment>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
          <p id="games" className="text-xl font-semibold mb-4">
            All Games
          </p>
          {data.map((item) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => handleCardClick(item.id)}
              />
            </Fragment>
          ))}
        </div>
        <div>
          <p id="games" className="text-xl font-semibold mb-4">
            All Games
          </p>
          {data.map((item) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => handleCardClick(item.id)}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
