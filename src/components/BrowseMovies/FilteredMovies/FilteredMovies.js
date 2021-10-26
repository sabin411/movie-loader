import "./FilteredMovies.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import MovieTemplate from "../../UI/MovieTemplate";
import axios from "axios";
import { updateBackdrop } from "../../../features/movieId/ActiveBackdrop";
function FilteredMovies() {
  const quality = useParams();
  console.log(quality);
  const [movies, setMovies] = new useState(null);
  const urlParams = useSelector((state) => state.searchTerm.value);
  const [moviesCount, setMoviesCount] = new useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(urlParams);
    axios
      .get("https://yts.mx/api/v2/list_movies.json ", {
        params: {
          ...urlParams,
        },
      })
      .then((resp) => {
        console.log(resp);
        setMoviesCount(resp.data.data.movie_count);
        setMovies(resp.data.data.movies);
        dispatch(updateBackdrop(false));
      });
    return () => {};
  }, [urlParams]);
  return (
    <section className="filtered-movies-container">
      <div className="filtered-movies-wrapper">
        <h1>
          <span>{(moviesCount && moviesCount) || `0`}</span>{" "}
          <span style={{ fontWeight: "normal", color: "#00BBCC" }}>
            {urlParams.quality && urlParams.quality}
          </span>{" "}
          YIFY Movies Found (by{" "}
          <span
            style={{
              textTransform: "capitalize",
              fontStyle: "italic",
              fontWeight: "normal",
            }}
          >
            {urlParams.sort_by === "date_added" ? "Latest" : urlParams.sort_by})
          </span>
        </h1>
        <ul className="filtered-movies_wrapper">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieTemplate
                  key={movie.id + movie.title}
                  movieDetails={movie}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default FilteredMovies;
