import { Link, useLocation } from "react-router-dom";
   
const MoviesList = ({arrMovies}) => {
        const location = useLocation();

    return <ul>
        {
            arrMovies.map(film =>
                <li key={film.id}
                >
                    <Link
                        to={`/movies/${film.id}`}
                        state={{ from: location, }}
                    >{film.title || film.name}</Link>
                </li>
            )
        }
    </ul>;
};

export default MoviesList;