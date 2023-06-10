
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
        if (id ) {
            fetchMoviesDetails(id)
                .then(data => {
                    console.log('data', data);
                    const { title, overview, genres, poster_path, release_date, vote_average } = data;
                    setFilm({ title, overview, genres, poster_path, release_date, vote_average })
                })
                .catch(error => console.error(error))
        };
    }, [id]);


    if (film) {
        const { title, overview, genres, poster_path, release_date, vote_average } = film;

        let genresFull = null;
        let year = null;
        let score = null;

        if (genres) {
            genresFull = genres.map(el => el.name).join(', ');
        };

        if (release_date) { 
            year = new Date(release_date).getFullYear();
        };

        if (vote_average) {
            score = (vote_average * 100 / 10).toFixed(0);
            
        }

        return (
            <main>
                <Container>
                    <Link to={backLinkHref.current}>GO TO BACK</Link>
                    <MovieDetailsItem
                        title={title}
                        overview={overview}
                        genres={genresFull}
                        poster_path={poster_path}
                        year={year}
                        score={score}
                    />
                    <h2>Additional informations</h2>
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