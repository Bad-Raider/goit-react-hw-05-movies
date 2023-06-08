import MoviesItem from "components/MoviesItem/MoviesItem"; 
    
const MoviesList = ({arrMovies}) => {
    
    return <ul>
            {
                arrMovies.map(film =>
                    <MoviesItem
                        key={film.id}
                        title={film.title}
                        name={film.name}
                        id={film.id}
                    />)
            }
        </ul>
};

export default MoviesList;