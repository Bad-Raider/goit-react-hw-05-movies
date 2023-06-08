import { Link, Outlet } from "react-router-dom";

const MovieDetailsItem = ({ title, overview, genres, poster_path }) => {
    
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <main>
            <img width='200px' src={`${baseUrl}${poster_path}`} alt={title} />
            <h1>{title}</h1>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{ genres}</p>
            <ul>
                <li><Link to='cast' >Cast</Link></li>
                <li><Link to='reviews' >Reviews</Link></li>
            </ul>
            <Outlet/>
        </main>
    )
};

export default MovieDetailsItem;