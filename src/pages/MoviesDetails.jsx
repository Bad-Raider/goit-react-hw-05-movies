
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { fetchMoviesDetails } from "helper/API";
import { useEffect, useState, useRef} from "react";
import MovieDetailsItem from "components/MovieDetailsItem/MovieDetailsItem";
import { Container } from "components/App.styled";

const MoviesDetails = () => {

    
    const  [film, setFilm]  = useState(null);
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? "/movies");
    
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
            <main>
                <Container>
                    <Link to={backLinkHref.current}>GO TO BACK</Link>
                    <MovieDetailsItem
                        title={title}
                        overview={overview}
                        genres={genresFull}
                        poster_path={poster_path}
                    />
                    <ul>
                        <li><Link to='cast' >Cast</Link></li>
                        <li><Link to='reviews' >Reviews</Link></li>
                    </ul>
                    <Outlet />
                </Container >
            </main>
        );
    };

    
};

export default MoviesDetails;