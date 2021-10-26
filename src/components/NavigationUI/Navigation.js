import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks/Navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
import TinyMovieTemplate from "../UI/TinyMovieTemplate";
import axios from "axios";
import Loading from "../UI/Loading";
function Navigation() {
  const [searchResult, setSearchResult] = new useState(null);
  const [searchValue, setSearchValue] = new useState();
  const [isResultActive, setIsResultActive] = new useState(false);
  const [isLoading, setIsLoading] = new useState(false);
  const [inputFocus, setInputFocus] = new useState(false);
  const refInput = useRef();
  useEffect(() => {
    if (inputFocus && searchValue && searchValue.length > 1) {
      setIsLoading(true);
      axios
        .get("https://yts.mx/api/v2/list_movies.json", {
          params: {
            limit: 5,
            sort_by: "rating",
            order_by: "desc",
            query_term: searchValue,
          },
        })
        .then((resp) => {
          var updatedResult = resp.data.data.movies;
          if (updatedResult) {
            setSearchResult(resp.data.data.movies);
            setIsLoading(false);
            setIsResultActive(true);
          } else {
            setSearchResult(null);
            setIsResultActive(false);
          }
        });
    } else {
      setSearchResult(null);
      setIsLoading(false);
      setIsResultActive(false);
    }
    return () => {
      setSearchResult(null);
    };
  }, [searchValue]);

  const hideSearchResult = () => {
    refInput.current.value = "";
    setIsResultActive(false);
  };
  const handleFocus = () => {
    setInputFocus(true);
  };
  return (
    <div className="navigation">
      <div className="navigation-left_section">
        <Link to="/">
          <img
            src="https://yts.mx/assets/images/website/logo-YTS.svg"
            alt=""
            className="logo"
          />
        </Link>
        <h3 className="navigation-site_description">
          Download HD movies in yts's clone website.
        </h3>
      </div>

      <div className="navigation-right_section">
        <div
          className="navigation-search_input"
          title="Only few High Rated Movies are displayed"
        >
          <div className="navigation-search_input-border">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input
              ref={refInput}
              onFocus={handleFocus}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder="Quick Search"
            />
            <div className="spinner">{isLoading && <Loading />}</div>
          </div>
          <ul
            className="search-result-wrapper"
            style={
              isResultActive && searchValue
                ? { transform: "scaleY(1)" }
                : { transform: "scaleY(0)", border: "none" }
            }
          >
            {searchResult &&
              searchResult.map((result) => {
                return (
                  <TinyMovieTemplate
                    onClick={hideSearchResult}
                    key={result.id}
                    data={result}
                  />
                );
              })}
          </ul>
        </div>
        <ul className="navigation-right_navLinks">
          <Navlinks links="/">Home</Navlinks>
          <Navlinks className="fourKLink" links="/browse-movies/quality=2160p">
            4K
          </Navlinks>
          <Navlinks links="trending">Trending</Navlinks>
          <Navlinks links="/browse-movies">Browse Movies</Navlinks>
        </ul>
        <ul className="navigation-right_userLogin">
          <Navlinks links="#">Login</Navlinks>
          <div className="divider"></div>
          <Navlinks links="#">Register</Navlinks>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
