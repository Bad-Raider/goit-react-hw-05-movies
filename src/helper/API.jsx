// const KEY = 'f770b37ddd63e16fc1e03e739fd25a3a';



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzcwYjM3ZGRkNjNlMTZmYzFlMDNlNzM5ZmQyNWEzYSIsInN1YiI6IjY0NmY3ZGE5YzVhZGE1MDBjMWEyZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ctesgAjc_-Qsx83a0GTn0WKImJ26QG8RrQNVRwOmR7Q'
  }
};

const fetchTrendingFimls = fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .catch(err => console.error(err));


export default fetchTrendingFimls;

