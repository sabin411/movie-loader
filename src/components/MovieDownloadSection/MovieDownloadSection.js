import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBg } from "../../features/BackgroundImage/BackgroundSlice";
import "./MovieDownloadSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faSteamSymbol } from "@fortawesome/free-brands-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import SmallPoster from "../UI/SmallPoster";
import ProfileCell from "../UI/ProfileCell";
import { updateBackdrop } from "../../features/movieId/ActiveBackdrop";
import QualityAvailableSec from "./QualityAvailableSec";
import ReviewSec from "./ReviewSec";
// ! functional component starts here .....
function MovieDownloadSection() {
  const { movie_id } = useParams();
  const [data, setData] = new useState();
  const [foo, setFoo] = new useState(0);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieComments, setMovieComments] = useState();
  const [movieCommentsError, setMovieCommentsError] = useState();
  const backdropStat = useSelector((state) => state.backdropState.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBackdrop(true));
    axios
      .get(
        `https://yts.mx/api/v2/movie_details.json?${movie_id}&with_images=true&with_cast=true&with_rt_ratings`
      )
      .then((resp) => {
        // console.log(resp);
        dispatch(updateBg(resp.data.data.movie.background_image_original));
        const dataArray = [resp.data.data.movie];
        setData(dataArray);
        return resp.data.data.movie.id;
      })
      .then((movie_id) => {
        axios
          .get(`https://yts.mx/api/v2/movie_comments.json?${movie_id}`)
          .then((resp) => console.log(resp));
      });
    axios
      .get(`https://yts.mx/api/v2/movie_suggestions.json?${movie_id}`)
      .then((resp) => {
        setSimilarMovies(resp.data.data.movies);
        dispatch(updateBackdrop(false));
      });
    return () => {
      dispatch(updateBg(""));
      setData(null);
      setSimilarMovies(null);
    };
  }, [movie_id]);
  return (
    <section className="download-section-container">
      {data && (
        <div className="download-section-container_wrapper">
          <div className="top-content">
            <div className="left-container movie-poster-container">
              <figure className="poster-figure">
                <img
                  src={data[0].medium_cover_image}
                  style={
                    data[0].medium_cover_image
                      ? { minWidth: "232.66px", minHeight: "349px" }
                      : null
                  }
                  alt=""
                />
              </figure>
              <button
                onClick={() => {
                  console.log("clicked");
                  dispatch(updateBackdrop(true));
                }}
                className="download-btn"
              >
                <span>
                  <FontAwesomeIcon icon={faDownload} />
                </span>
                Download
              </button>
              <ul className="media">
                <li>
                  <a className="twitter" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a className="reddit" href="#">
                    <FontAwesomeIcon icon={faRedditAlien} />
                  </a>
                </li>
                <li>
                  <a className="pinterest" href="#">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
                <li>
                  <a className="streams" href="#">
                    <FontAwesomeIcon icon={faSteamSymbol} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="middle-content">
              <h1>{data[0].title}</h1>
              <h3>{data[0].year}</h3>
              <h3>
                {data[0].genres.map((genre, index) => {
                  return index === data[0].genres.length - 1 ? (
                    <span key={genre}>{genre}</span>
                  ) : (
                    <span key={genre}>{genre} / </span>
                  );
                })}
              </h3>
              <div className="Available-quality">
                <div className="Available-quality_wrapper">
                  <h4>Available in: </h4>
                  <ul>
                    {data[0].torrents.map((item) => {
                      return (
                        <li key={item.quality + item.type}>
                          <a
                            onClick={() => {
                              alert(`Are you sure you want to download ?`);
                            }}
                            href={item.url}
                          >
                            {item.quality}.{item.type}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {foo < 0 ? (
                  <p>
                    WEB: same quality as BluRay, but ripped earlier from a
                    streaming service
                  </p>
                ) : null}
              </div>
              <a href="#" className="subtitle-download-btn">
                <span>
                  <FontAwesomeIcon icon={faDownload} />{" "}
                </span>
                Download Subtitle
              </a>
              <div className="middle-content_bottom-info">
                <div className="likes">
                  <div className="icon-wrapper heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <span>{data[0].like_count}</span>
                </div>
                <div className="rating-number">
                  {/* <FontAwesomeIcon className="imdb" icon={faImdb} />
                   */}
                  <img
                    className="imdb-icon"
                    src="https://yts.mx/assets/images/website/logo-imdb.svg"
                    alt=""
                  />
                  <span>{data[0].rating}</span>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      marginLeft: ".8rem",
                      color: "#6ac045",
                      fontSize: "16px",
                    }}
                  />
                </div>
                {/* <table>
                  <tr>
                    <td>
                      <span className="rating-wrapper movie-likes_love-icon">
                        <FontAwesomeIcon className="heart" icon={faHeart} />
                      </span>
                    </td>
                    <td className="rating-number">
                      <span>{data[0].like_count}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="" className="rating-wrapper movie-critics-icon">
                        <FontAwesomeIcon className="imbd" icon={faImdb} />
                      </a>
                    </td>
                    <td className="rating-number">
                      <span>
                        {data[0].rating}{" "}
                        <FontAwesomeIcon
                          style={{
                            color: "#6ac045",
                            fontSize: "18px",
                            marginLeft: ".3rem",
                            marginBottom: ".1rem",
                          }}
                          icon={faStar}
                        />{" "}
                      </span>
                    </td>
                  </tr>
                </table> */}
              </div>
            </div>
            <div className="right-content">
              <h3>Similar Movies</h3>
              <div className="similar-movies-container">
                {similarMovies &&
                  similarMovies.map((movie) => {
                    return (
                      <SmallPoster
                        small_cover_image={movie.medium_cover_image}
                        movie_id={movie.id}
                        key={movie.id}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <section className="middle-container movie-snapShots">
            <div className="preview-trailer">
              <iframe
                src={`https://www.youtube.com/embed/${data[0].yt_trailer_code}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <img src={data[0].medium_screenshot_image1} alt="" />
            <img src={data[0].medium_screenshot_image2} alt="" />
          </section>
          {/* Synopsis */}
          <section className="synopsis">
            <div className="synopsis-left">
              <h3>Synopsis</h3>
              <p>{data[0].description_full}</p>
              <a href="#" className="parental-guide">
                Parental Guide
              </a>
              <div className="uploaded-date-time">
                <h5>
                  Uploaded by: <span>FREEMAN</span>
                </h5>
                <h5>September 15, 2021 at 11:52 AM</h5>
              </div>
            </div>
            <div className="synopsis-right">
              <h3>Cast</h3>
              <div className="profile-cell">
                {data[0].cast &&
                  data[0].cast.map((item) => {
                    return (
                      <ProfileCell key={item.imdb_code} castDetails={item} />
                    );
                  })}
                {!data[0].cast && (
                  <p className="no-cast">Cast Info Not Available</p>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
      <QualityAvailableSec data={data && data[0]} />
      <ReviewSec />
    </section>
  );
}

export default MovieDownloadSection;
