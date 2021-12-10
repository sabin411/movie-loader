import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Layout.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bodycontent from "../components/BodyContent/Bodycontent";
import Navigation from "../components/NavigationUI/Navigation";
import MovieDownloadSection from "../components/MovieDownloadSection/MovieDownloadSection";
import Backdrop from "../components/UI/Backdrop";
import BrowseMovies from "../components/BrowseMovies/BrowseMovies";
function Layout() {
  const isBackdropActive = useSelector((state) => state.backdropState.value);
  const [showBackdrop, setShowBackdrop] = new useState();
  useEffect(() => {
    setShowBackdrop(isBackdropActive);
  }, [isBackdropActive]);
  return (
    <Router>
      {showBackdrop && <Backdrop />}
      <div className="container-wrapper">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Bodycontent />
          </Route>
          <Route path="/download/:movie_id">
            <MovieDownloadSection />
          </Route>
          <Route path="/browse-movies/">
            <BrowseMovies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;
