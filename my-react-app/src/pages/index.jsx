import { useEffect, useState } from "react";
import Image from "../assets/hero.png";

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
      <div className="topnav">
  <a className="active">Movie Site</a>

  <div className="search-container">
    <form onSubmit={handleSubmit} id="form">
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  </div>
</div>

      <section id="section">
  <div className="row">
    {movies.map((movie) => (
      <div className="column" key={movie.id}>
        <div className="card">
          <center>
            <img
              className="thumbnail"
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
              className="reviewsLink"
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