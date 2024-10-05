import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaGamepad, FaBook } from "react-icons/fa"; // Import icons for Games and Book
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import MovieDetail from "./pages/MovieDetail";
import Games from "./pages/Game";
import Books from "./pages/Book";
import Login from "./pages/Login"; // Import komponen Login

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 26</p>
      </header>
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/games" element={<Games />} />
        <Route path="/book" element={<Books />} />
        <Route path="/" element={<Login />} />{" "}
        {/* Tambahkan route untuk Login */}
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/games" className="iconWrapper">
          <FaGamepad className="icon" /> Games
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <FaBook className="icon" /> Book
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
