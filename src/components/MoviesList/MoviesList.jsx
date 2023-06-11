import { Link, useLocation } from "react-router-dom";
import {ListItem, List, Img } from "./MoviesList.styled"
import img from '../../placeholder.jpg';   

const MoviesList = ({ arrMovies }) => {
    const location = useLocation();
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    

    return (arrMovies.length === 0)
        ? <h3>Such a film has not been made yet, try something else.</h3> 
        : (<List>
        {
                arrMovies.map(({ id, poster_path, title }) =>

                <ListItem key={id}>
                    <Img width={'100px'}
                            src={
                                poster_path
                            ? `${baseUrl}${poster_path}`
                            : `${img}`
                        }
                        alt={title} />
                    <Link
                        to={`/movies/${id}`}
                        state={{ from: location, }}
                    >{title }</Link>
                </ListItem>
            )
        }
        </List>)
};

export default MoviesList;