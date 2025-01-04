import { useLocation } from 'react-router-dom';

function TvsereDetails() {
   
    const location = useLocation();
    const { TvSerie } = location.state || {}; // Get TvSerie from state

    if (!TvSerie) {
        return <p>No TV show data provided.</p>;
    }
  
    return (


  
      

    <div
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${TvSerie.backdrop_path})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "20px",
      color: "white",
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "900px",
        margin: "auto",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="details-container">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${TvSerie.poster_path}`}
              className="img-fluid rounded-start mx-auto "
              alt={TvSerie.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{TvSerie.name}</h2>
              <p className="card-text">{TvSerie.overview || "No overview available."}</p>

              <ul className=" list-group-flush">
                <li className="list-group-item movie-list-item">
                  <strong>First Air Date:</strong> {TvSerie.first_air_date || "N/A"}
                </li>
                <li className="list-group-item movie-list-item">
                  <strong>Genres:</strong>{" "}
                  {TvSerie.genres?.length
                    ? TvSerie.genres.map((genre) => genre.name).join(", ")
                    : "N/A"}
                </li>
                <li className="list-group-item movie-list-item">
                  <strong>Languages:</strong>{" "}
                  {TvSerie.spoken_languages?.length
                    ? TvSerie.spoken_languages.map((lang) => lang.english_name).join(", ")
                    : "N/A"}
                </li>
                <li className="list-group-item movie-list-item">
                  <strong>Status:</strong> {TvSerie.status || "N/A"}
                </li>
                <li className="list-group-item movie-list-item">
                  <strong>Seasons:</strong> {TvSerie.number_of_seasons || "N/A"}
                </li>
                <li className="list-group-item movie-list-item">
                  <strong>Episodes:</strong> {TvSerie.episode_run_time || "N/A"}
                </li>
                <li className="list-group-item movie-list-item">
                  <strong>Average Rating:</strong> {TvSerie.vote_average || "N/A"} (
                  Votes: {TvSerie.vote_count || 0})
                </li>
              </ul>

              <div className="mt-3">
                <h5>Production Companies:</h5>
                {TvSerie.production_companies?.length ? (
                  <ul>
                    {TvSerie.production_companies.map((company) => (
                      <li key={company.id}>{company.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No production companies available.</p>
                )}
              </div>

              <div className="mt-3">
                <h5>Networks:</h5>
                {TvSerie.networks?.length ? (
                  <ul>
                    {TvSerie.networks.map((network) => (
                      <li key={network.id}>{network.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No networks available.</p>
                )}
              </div>

              <div className="mt-3">
                <h5>Last Episode:</h5>
                {TvSerie.last_episode_to_air ? (
                  <div>
                    <strong>Name:</strong> {TvSerie.last_episode_to_air.name}
                    <br />
                    <strong>Air Date:</strong> {TvSerie.last_episode_to_air.air_date}
                    <br />
                    <strong>Overview:</strong> {TvSerie.last_episode_to_air.overview || "N/A"}
                  </div>
                ) : (
                  <p>No last episode available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
   
}

export default TvsereDetails;
