import { useEffect, useState } from "react";
import Image from "../assets/hero.png";
import styles from "../styles/Index.module.css";
import { Link, useNavigate } from "react-router-dom";


const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b02060954d06627c40af5c1f3c15111&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=4b02060954d06627c40af5c1f3c15111&query=";

export default function Index() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies(APILINK);
  }, []);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      getMovies(SEARCHAPI + search);
    }
  };

  return (
    <>
      <div className={styles.topnav}>
  <a className={styles.active}>Movie Site</a>
  <Link className={styles.link} to="/login">Login</Link>
  <Link className={styles.link} to="/register">Register</Link>
  
  <div className={styles.searchContainer}>
    <form onSubmit={handleSubmit} id="form">
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  </div>
  <Link className={styles.link} to="/profile">Profile</Link>
  <Link className={styles.link} to="/logout">Logout</Link>
</div>

      <section id="section">
  <div className={styles.row}>
    {movies.map((movie) => (
      <div className={styles.column} key={movie.id}>
        <div className={styles.card}>
          <center>
            <img
              className={styles.thumbnail}
              src={IMG_PATH + movie.poster_path}
              alt={movie.title}
              onError={(e) => {
                e.target.src = Image;
              }}
            />
          </center>

          <h3>
            {movie.title}
            <br />
            <a
              href={`/movie?id=${movie.id}&title=${movie.title}`}
              className={styles.reviewsLink}
            >
              Reviews
            </a>
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
}