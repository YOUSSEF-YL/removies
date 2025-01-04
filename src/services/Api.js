const API_KEY = '---';
const BASE_URL = 'https://api.themoviedb.org/3';


export const getPopularMovies = async () => {
 
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getTrendingtrows = async () => {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
  const data = await response.json();
  return data.results;
};

 export const getGenre = async () => {

  const response = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(res => console.log(res)); 
  const data = await response.json();
   
    return data.results;
 }

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const searchTvshow = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};


// Details

export const TvshowDetails = async (id) => {
 
  //  fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`)
  fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
};