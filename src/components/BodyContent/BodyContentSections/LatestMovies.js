import React, { useState, useEffect } from "react";
import MovieTemplate from "../../UI/MovieTemplate";
import "./LatestMovies.css";
function LatestMovies({ movieDetails: latestMovies }) {
  return (
    <section className="latest-movies">
      <div className="latest-movies_container">
        <div className="latest-movies-header-section">
          <h1 className="latest-movies_title">Latest YIFY Movies Torrents</h1>
          <a href="#" className="latest-movies_browse-more">
            Browse All
          </a>
        </div>
        <ul className="latest-movies_movie">
          {latestMovies.map((movie) => {
            return <MovieTemplate key={movie.id} movieDetails={movie} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default LatestMovies;
