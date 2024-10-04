import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();

  const movies = [
    {
      title: "Oppenheimer",
      id: 1,
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
      title: "Oppenheimer",
      id: 2,
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
      title: "Oppenheimer",
      id: 3,
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
      title: "Oppenheimer",
      id: 4,
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
      e: "Oppenheimer",
      id: 5,
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
      title: "Oppenheimer",
      id: 6,
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
  ];

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found!</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.img} alt={movie.title} />
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rate}</p>
    </div>
  );
}
