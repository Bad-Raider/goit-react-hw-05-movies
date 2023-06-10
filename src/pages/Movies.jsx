import { useState, useEffect, } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesForm from "components/MoviesForm/MoviesForm";
import MoviesList from "components/MoviesList/MoviesList";
import { fetchMovieByName } from "helper/API";
import { Container } from '../components/App.styled';



const Movies = () => {

    const [arrMovies, setArrMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    console.log('searchParams', query);

    useEffect(() => {
        if (query) {
            fetchMovieByName(query)
                .then(data => setArrMovies(data.results))
                .catch(err => console.log(err))
        };
    }, [query]);

    const onSubmit = (query) => {
        setSearchParams({query})
    };

    return (
        <Container>
            <MoviesForm onSubmit={onSubmit} />
            {arrMovies && <MoviesList arrMovies={arrMovies} />}
        </Container>
    )
}

export default Movies;
