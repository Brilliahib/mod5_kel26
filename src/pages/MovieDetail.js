import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();

  const movies = [
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
      title: "Interstellar",
      id: 4,
      rate: 5,
      genre: "sci-fi, adventure",
      img: "https://m.media-amazon.com/images/I/71xoYlBY1DL._AC_SL1500_.jpg",
    },
    {
      title: "Dunkirk",
      id: 5,
      rate: 4,
      genre: "war, drama",
      img: "https://m.media-amazon.com/images/I/61I6pUeZDtL._AC_SL1000_.jpg",
    },
    {
      title: "Tenet",
      id: 6,
      rate: 4,
      genre: "action, sci-fi",
      img: "https://m.media-amazon.com/images/I/51VmQGkqFHL._AC_.jpg",
    },
  ];

  // Menambahkan data game
  const games = [
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
  ];

  // Menambahkan data buku
  const books = [
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
  ];

  // Gabungkan semua data ke dalam satu array
  const allItems = [...movies, ...games, ...books];

  const item = allItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found!</p>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>{item.title}</h1>
        <img
          src={item.img}
          alt={item.title}
          style={{ width: "400px", marginBottom: "2rem" }}
          className="h-[600px] object-cover"
        />
        <div style={{ color: "white", textAlign: "center" }}>
          <p>{item.genre}</p>
          <p>{item.rate}/5</p>
        </div>
      </div>
    </div>
  );
}
