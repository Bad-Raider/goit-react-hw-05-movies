// const KEY = 'f770b37ddd63e16fc1e03e739fd25a3a';
const KEY_API = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzcwYjM3ZGRkNjNlMTZmYzFlMDNlNzM5ZmQyNWEzYSIsInN1YiI6IjY0NmY3ZGE5YzVhZGE1MDBjMWEyZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ctesgAjc_-Qsx83a0GTn0WKImJ26QG8RrQNVRwOmR7Q';



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${KEY_API}` 
  }
};

const fetchTraidingFilms = fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .catch(err => console.error(err));

  // fetchTraidingFilms.then(data => console.log(data.results))

export default fetchTraidingFilms;
