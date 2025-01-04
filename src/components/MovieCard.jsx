import '../assets/css/MovieCard.css'
import { useMovieContext } from "../contexts/MovieContext"
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
    const {isOnFavorites, addToFavorites, favoritesRemover} = useMovieContext()
    const favorite = isOnFavorites(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) favoritesRemover(movie.id)
        else addToFavorites(movie)
    }

  
    return <div className="movie-card">
        <Link to="/TvSerieDetails" state={movie}>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ☆
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        </Link>
    </div>
}
export default MovieCard