import { useState, useEffect } from "react";
import MoviesForm from "components/MoviesForm/MoviesForm";
import MoviesList from "components/MoviesList/MoviesList";
import { fetchMovieByName } from "helper/API";


const Movies = () => {

    const [name, setName] = useState('');
    const [arrMovies, setArrMovies] = useState(null);
    
    console.log(arrMovies);

    useEffect(() => {
        if (name) {
            fetchMovieByName(name)
                .then(data => setArrMovies(data.results))
                .catch(err => console.log(err))
        };
    }, [name]);

    const onSubmit = (name) => {
        setName(name);
    };

    return (
        <>
            <MoviesForm onSubmit={onSubmit} />

            {arrMovies && <MoviesList arrMovies={arrMovies} />}
        </>
    )
}

export default Movies;
