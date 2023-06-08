const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzcwYjM3ZGRkNjNlMTZmYzFlMDNlNzM5ZmQyNWEzYSIsInN1YiI6IjY0NmY3ZGE5YzVhZGE1MDBjMWEyZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ctesgAjc_-Qsx83a0GTn0WKImJ26QG8RrQNVRwOmR7Q` 
  }
};


export const fetchTraidingMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
};

export const fetchMovieByName = async (name) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
};

export const fetchMoviesDetails = async (id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}; 

export const fetchMoviesCast = async (id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
};

export const fetchMoviesReviews = async (id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
};

