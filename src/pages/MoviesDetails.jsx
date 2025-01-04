
import { useLocation } from 'react-router-dom';

function MoviesDetails() {

    const location = useLocation();
    const { Movie } = location.state || {}; // Get Movie from state
    console.log(Movie);
    if (!Movie) {
        return <p>No TV show data provided.</p>;
    }
  return (
    //      <div
    //     style={{
    //       backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //       minHeight: '100vh',
    //       padding: '20px',
    //       position: 'relative',
    //     }}
    //   >
    //     <div
    //       style={{
    //         backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black for main content
    //         color: 'white',
    //         borderRadius: '10px',
    //         padding: '20px',
    //         maxWidth: '900px',
    //         margin: 'auto',
    //         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    //       }}
    //     >
    //       <div className="movie-card">
    //         <div className="row g-0">
    //           <div className="col-md-4">
    //             <img
    //               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //               className="img-fluid rounded-start"
    //               alt={movie.title}
    //             />
    //           </div>
    //           <div
    //             className="col-md-8"
    //             style={{
    //               backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    //               color: 'white', // Ensure text remains readable
    //               borderRadius: '10px',
    //               padding: '15px',
    //             }}
    //           >
    //             <div className=" ">
    //               <h2 className="card-title">{movie.title}</h2>
    //               <p className="card-text">
    //                 <small className="text-muted">Tagline: {movie.tagline}</small>
    //               </p>
    //               <p className="card-text">{movie.overview}</p>
      
    //               <ul className="">
    //                 <li className="list-group-item movie-list-item">
    //                   <strong>Release Date:</strong> {movie.release_date}
    //                 </li>
    //                 <li className="list-group-item movie-list-item">
    //                   <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
    //                 </li>
    //                 <li className="list-group-item movie-list-item">
    //                   <strong>Runtime:</strong> {movie.runtime} minutes
    //                 </li>
    //                 <li className="list-group-item movie-list-item">
    //                   <strong>Language:</strong>{' '}
    //                   {movie.spoken_languages.map((lang) => lang.english_name).join(', ')}
    //                 </li>
    //                 <li className="list-group-item movie-list-item">
    //                   <strong>IMDB ID:</strong> {movie.imdb_id}
    //                 </li>
    //                 <li className="list-group-item movie-list-item">
    //                   <strong>Average Rating:</strong> {movie.vote_average} (Votes: {movie.vote_count})
    //                 </li>
    //               </ul>
      
    //               <div className="mt-3">
    //                 <h5>Production Companies:</h5>
    //                 <ul>
    //                   {movie.production_companies.map((company) => (
    //                     <li key={company.id}>{company.name}</li>
    //                   ))}
    //                 </ul>
    //               </div>
      
    //               <div className="mt-3">
    //                 <h5>Production Countries:</h5>
    //                 <ul>
    //                   {movie.production_countries.map((country, index) => (
    //                     <li key={index}>{country.name}</li>
    //                   ))}
    //                 </ul>
    //               </div>
      
    //               <p className="mt-3">
    //                 <strong>Budget:</strong> ${movie.budget.toLocaleString()} <br />
    //                 <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div>
        <h1>ggggg</h1>
    </div>
  )
}

export default MoviesDetails
