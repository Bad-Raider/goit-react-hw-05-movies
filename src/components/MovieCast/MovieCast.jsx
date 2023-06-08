import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "helper/API";


const MovieCast = () => {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    const { id } = useParams();
    const [actors, setCast] = useState(null);

    useEffect(() => {
        if(id){
            fetchMoviesCast(id)
            .then(data => setCast(data))
        }
    }, [id]);


    return (
        <>
            {
                actors ? (
                <>
                    <h1>Cast:</h1>
                    <ul>

                    {actors.cast.map(({character, original_name, profile_path, id}) => (
                    <li key={id}>
                        <img width={'40px'} src={`${baseUrl}${profile_path}`} alt={original_name} />
                        <p>{original_name}</p>
                        <p>character: {character}</p>
                    </li>))}
                        </ul>
                </>
                )
                
                : (<p>Loading cast...</p>)
            }
            
        </>    
    );
};

export default MovieCast;