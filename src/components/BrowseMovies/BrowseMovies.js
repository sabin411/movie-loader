import "./BrowseMovies.css";
import BrowseMoviesFilters from "./BrowseMoviesFilters/BrowseMoviesFilters";
import FilteredMovies from "./FilteredMovies/FilteredMovies";
function BrowseMovies() {
  return (
    <section className="Browse-movies-section">
      <BrowseMoviesFilters />
      <FilteredMovies />
    </section>
  );
}

export default BrowseMovies;
