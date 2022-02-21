import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchMovie = () => {
    setLoading(true);
    axios
      .get(
        "https://react-js-course-intern-default-rtdb.firebaseio.com/movies.json"
      )
      .then((res) => {
        let newMovieList = [];
        Object.keys(res.data).forEach((key, index) => {
          let newMovie = {
            id: res.data[key].episode_id,
            title: res.data[key].title,
            releaseDate: res.data[key].releaseDate,
            openingText: res.data[key].openingText,
          };
          newMovieList.push(newMovie);
        });
        setMovies(newMovieList);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
        console.log(err);
      });
  };

  const addMovieHandler = (movie) => {
    setLoading(true);
    axios
      .post(
        "https://react-js-course-intern-default-rtdb.firebaseio.com/movies.json",
        { ...movie, episode_id: Math.random() }
      )
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <React.Fragment>
      <section>
        <section>
          <AddMovie onAddMovie={addMovieHandler} />
        </section>
      </section>
      <section>
        <button onClick={fetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading ....</p>}
        {err && <p>SomeThing Went Wrong</p>}
        {!isLoading && movies.length !== 0 && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
