import MovieCard from "../components/TvCard";
import { useState, useEffect } from "react";
import '../assets/css/vapor.css'
import '../assets/css/Home.css'
import { searchMovies, searchTvshow,getTrendingtrows } from "../services/Api";
import TvCard from "../components/TvCard";


function TvSeries() {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [TvSeries, setTvSeries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTvSerieslist = async () => {
      try {
        const TvSerieslist = await getTrendingtrows();
        setTvSeries(TvSerieslist);
      } catch (err) {
        console.log(err);
        setError("Failed to load TvSeries...");
      } finally {
        setLoading(false);
      }
    };

    loadTvSerieslist();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchTvshow(searchQuery)
        setTvSeries(searchResults)
        setError(null)
    } catch (err) 
    {
        console.log(err)
        setError("Failed to find TvSeries...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-light">
          Search
        </button>
      </form>

        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {TvSeries.map((TvSerie) => (
            <TvCard TvSerie={TvSerie} key={TvSerie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TvSeries;
