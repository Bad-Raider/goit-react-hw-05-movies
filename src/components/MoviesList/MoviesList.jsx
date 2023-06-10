import { Link, useLocation } from "react-router-dom";
   
const MoviesList = ({arrMovies}) => {
    const location = useLocation();
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    console.log(arrMovies);
    return <ul>
        {
            arrMovies.map(film =>
                <li key={film.id}>
                    <img width={'100px'} src={`${baseUrl}${film.poster_path}`} alt={film.title} />
                    <Link
                        to={`/movies/${film.id}`}
                        state={{ from: location, }}
                    >{film.title }</Link>
                </li>
            )
        }
    </ul>;
};

export default MoviesList;