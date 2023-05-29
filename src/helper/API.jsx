const KEY = 'f770b37ddd63e16fc1e03e739fd25a3a';

const Api = () => {
    return (
        <>
            <h1>Trending today</h1>
            <ul></ul>
        </>
    );
};

export default Api;



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzcwYjM3ZGRkNjNlMTZmYzFlMDNlNzM5ZmQyNWEzYSIsInN1YiI6IjY0NmY3ZGE5YzVhZGE1MDBjMWEyZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ctesgAjc_-Qsx83a0GTn0WKImJ26QG8RrQNVRwOmR7Q'
  }
};

fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/11?api_key=f770b37ddd63e16fc1e03e739fd25a3a'
