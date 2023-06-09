import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "helper/API";


const MovieCast = () => {
    // const baseUrl = 'https://image.tmdb.org/t/p/w500';

    const { id } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        if (id) {
            console.log('useEffect start');
            fetchMoviesCast(id)
                .then(data =>
                    // console.log(data.cast)
                    setActors(data)
                    )
        }
    }, [id]);
    

 
    // if () {
    //     return <>
    //         <h1>Cast:</h1>
    //         <ul>
    //             {
    //                 actors.map(({ character, original_name, profile_path, id }) => (
    //                 <li key={id}>
    //                     <img width={'40px'} src={`${baseUrl}${profile_path}`} alt={original_name} />
    //                     <p>{original_name}</p>
    //                     <p>character: {character}</p>
    //                 </li>))
    //             }
    //         </ul>
    //     </>
    // }

    console.log('actors-----', actors);
    console.log('actors.length-----', actors.length);
    console.log('id----', id);
    // if (!actors ) {
    //     <div>404</div>
    // };
    return <div>404</div> 

        
    
    
};

export default MovieCast;