import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "helper/API";

const MovieCast = () => {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const { id } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const { cast } = await fetchMoviesCast(id);

                const filteredResults = cast.map(
                    ({ name, character, profile_path, id }) => {
                        return { name, character, profile_path, id };
                    }
                );
                setCast(filteredResults);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetch();
            
    }, [id]);
 
    return  (cast.length === 0)
        ? <div> No info about actors </div>
        : <ul>
            {
                cast.map(({ character, original_name, profile_path, id }) => (
                    <li key={id}>
                        <img width={'40px'} src={`${baseUrl}${profile_path}`} alt={original_name} />
                        <p>{original_name}</p>
                        <p>character: {character}</p>
                    </li>))
            }
        </ul>;
};

export default MovieCast;