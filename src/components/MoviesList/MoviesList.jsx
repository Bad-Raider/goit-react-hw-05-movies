import { Link, useLocation } from "react-router-dom";
   
const MoviesList = ({arrMovies}) => {
    const location = useLocation();
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    
    console.log('arrMovies', arrMovies);
    
    return (arrMovies.length === 0)
        ? <div>Such a film has not been made yet, try something else.</div> 
        : (<ul>
        {
            arrMovies.map(({id, poster_path, title}) =>
                <li key={id}>
                    <img width={'100px'} src={`${baseUrl}${poster_path}`} alt={title} />
                    <Link
                        to={`/movies/${id}`}
                        state={{ from: location, }}
                    >{title }</Link>
                </li>
            )
        }
        </ul>)
};

export default MoviesList;