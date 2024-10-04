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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>{movie.title}</h1>
        <img
          src={movie.img}
          alt={movie.title}
          style={{ width: "400px", marginBottom: "2rem" }}
        />
        <div style={{ color: "white", textAlign: "center" }}>
          <p>{movie.genre}</p>
          <p>{movie.rate}/5</p>
        </div>
      </div>
    </div>
  );
}
