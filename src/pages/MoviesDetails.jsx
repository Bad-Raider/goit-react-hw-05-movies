
import { useParams } from "react-router-dom";
import { fetchMoviesDetails } from "helper/API";
import { useEffect, useState } from "react";
import MovieDetailsItem from "components/MovieDetailsItem/MovieDetailsItem";

const MoviesDetails = () => {


    const  [film, setFilm]  = useState(null);
    const { id } = useParams();

      useEffect(() => {
        if (id || id !== '') {
            fetchMoviesDetails(id)
                .then(data => setFilm(data))
                .catch(error => console.error(error))
          };
    }, [id]);


    if (film) {
        const { title, overview, genres, poster_path } = film;
        
        let genresFull = null;

        if (genres) {
            genresFull = genres.map(el => el.name).join(', ');
        };

        return (
            <MovieDetailsItem
                title={title}
                overview={overview}
                genres={genresFull}
                poster_path={poster_path}
            
            />
        );
    }
    console.log(film);

    
};

export default MoviesDetails;