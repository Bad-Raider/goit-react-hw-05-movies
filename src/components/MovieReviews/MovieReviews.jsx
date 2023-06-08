import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "helper/API"; 


const MovieReviews = () => {

    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if(id){
            fetchMoviesReviews(id)
            .then(data => setReviews(data.results))
        }
    }, [id]);


     return (
        <>
             {reviews ? (
                 <>
                <h1>Reviews:</h1>
                <ul>
                {reviews.map(({ author, content, id }) => (
                    <li key={id}>
                        <h2>{author}</h2>
                        <p>{content}</p>
                    </li>
                ))}
                     </ul>
                </>)
                 : (<p>We don`t have</p>)
             }
        </>    
    );
};

export default MovieReviews;