import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBg } from "../../features/BackgroundImage/BackgroundSlice";
import axios from "axios";
import "./Bodycontent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieTemplate from "../UI/MovieTemplate";
import LatestMovies from "./BodyContentSections/LatestMovies";
import UpcomingMovies from "./BodyContentSections/UpcomingMovies";
import Footer from "./BodyContentSections/Footer";
import { updateBackdrop } from "../../features/movieId/ActiveBackdrop";
function Bodycontent() {
  const [suggestionMovies, setSuggestionMovies] = new useState(null);
  const [suggestionMoviesError, setSuggestionMoviesError] = new useState(null);
  const [latestMovies, setLatestMovies] = new useState(null);
  const [latestMoviesError, setLatestMoviesError] = new useState(null);
  const [upcomingMovies, setUpcomingMovies] = new useState(null);
  const [upcomingMoviesError, setUpcomingMoviesError] = new useState();
  const backdropStat = useSelector((state) => state.backdropState.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBackdrop(true));
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((resp) => {
        const firstMovie = resp.data.data.movies[0];
        dispatch(updateBg(firstMovie.background_image_original));
        setSuggestionMovies(resp.data.data.movies);
        dispatch(updateBackdrop(false));
        setSuggestionMoviesError(null);
      })
      .catch((err) => {
        setSuggestionMoviesError(err);
      });
    axios
      .get("https://yts.mx/api/v2/list_movies.json", {
        params: {
          limit: 8,
        },
      })
      .then((resp) => {
        setLatestMovies(resp.data.data.movies);
        setLatestMoviesError(null);
      })
      .catch((err) => {
        setLatestMoviesError(err);
      });
    axios
      .get("https://yts.mx/api/v2/list_upcoming.json")
      .then((resp) => {
        setUpcomingMovies(resp.data.data.movies);
        setUpcomingMoviesError(null);
      })
      .catch((err) => {
        setUpcomingMoviesError(err);
      });
    return () => {
      dispatch(updateBg(""));
      setSuggestionMovies(null);
      setLatestMovies(null);
    };
  }, []);
  return (
    <>
      {/* <Backdrop /> */}
      <div className="movies-container">
        <h1>Download YTS YIFY movies: HD smallest size</h1>
        <p>
          Welcome to the UNOFFICIAL YTS.MX (.LT) website that I cloned. Here you
          can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K
          and 3D quality, all at the smallest file size.{" "}
        </p>
        <a href="https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </a>
        <p className="popular-download-title">
          {" "}
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          Popular Downloads
        </p>
        <div className="divider"></div>
        <div className="popular-movies-lists">
          {suggestionMovies &&
            suggestionMovies.map((movie) => {
              return <MovieTemplate key={movie.id} movieDetails={movie} />;
            })}
          {suggestionMoviesError && (
            <p>Error is shown i know its not pretty....</p>
          )}
        </div>
      </div>
      {latestMovies && <LatestMovies movieDetails={latestMovies} />}
      {upcomingMovies && <UpcomingMovies movieDetails={upcomingMovies} />}
      <Footer />
    </>
  );
}

export default Bodycontent;
