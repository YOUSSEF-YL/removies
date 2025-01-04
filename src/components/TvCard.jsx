import '../assets/css/MovieCard.css'
import { useMovieContext } from "../contexts/MovieContext"
import { Link } from 'react-router-dom'

function TvCard({TvSerie}) {
    const {isOnFavorites, addToFavorites, favoritesRemover,curentTVs} = useMovieContext()
    const favorite = isOnFavorites(TvSerie.id)
    
    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) favoritesRemover(TvSerie.id)
        else addToFavorites(TvSerie)
    }

 
   

    return <div className="movie-card">
    <Link to="/TvSerieDetails" state={{ TvSerie }}>
     <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${TvSerie.poster_path}`} alt={TvSerie.name}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ☆
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{TvSerie.name}</h3>
            <p>{TvSerie.first_air_date?.split("-")[0]}</p>
        </div>
     </Link>
    </div>
}
export default TvCard