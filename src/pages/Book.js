import { Fragment } from "react";
import CardBig from "../components/CardBig";
import CardSmall from "../components/CardSmall";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const STAR_COLOR = "rgb(255, 193, 7)"; // Change the color for Books
  const STAR_SIZE = 20;
  const navigate = useNavigate();

  // Data for featured books (CardBig)
  const poster = [
    {
      title: "The Great Gatsby",
      id: 1,
      rate: 5,
      genre: "Classic, Fiction",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
    {
      title: "1984",
      id: 2,
      rate: 5,
      genre: "Dystopian, Science Fiction",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      id: 3,
      rate: 5,
      genre: "Classic, Fiction",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
  ];

  // Data for all books (CardSmall)
  const data = [
    {
      title: "Pride and Prejudice",
      id: 10,
      rate: 5,
      genre: "Classic, Romance",
      img: "https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg",
    },
    {
      title: "The Catcher in the Rye",
      id: 11,
      rate: 4,
      genre: "Classic, Fiction",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
    {
      title: "Moby-Dick",
      id: 12,
      rate: 5,
      genre: "Classic, Adventure",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
    {
      title: "War and Peace",
      id: 4,
      rate: 4,
      genre: "Historical, Fiction",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
    {
      title: "The Hobbit",
      id: 5,
      rate: 5,
      genre: "Fantasy, Adventure",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
    {
      title: "The Lord of the Rings",
      id: 6,
      rate: 5,
      genre: "Fantasy, Adventure",
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <p id="books" className="text-2xl font-bold mb-4">
        Top Books
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
          <p id="books" className="text-xl font-semibold mb-4">
            All Books
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
          <p id="books" className="text-xl font-semibold mb-4">
            All Books
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
