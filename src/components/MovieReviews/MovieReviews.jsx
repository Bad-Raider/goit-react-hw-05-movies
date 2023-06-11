import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchMoviesReviews } from "helper/API"; 


const MovieReviews = () => {

    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if(id){
            fetchMoviesReviews(id)
            .then(data => setReviews(data.results))
        }
    }, [id]);

     return (
             (reviews.length === 0)
                 ? <p>We don`t have</p> 
                 : <>
                <h1>Reviews:</h1>
                <ul>
                {reviews.map(({ author, content, id }) => (
                    <li key={id}>
                        <h2>{author}</h2>
                        <p>{content}</p>
                    </li>
                ))}
                     </ul>
                </>  
    );
};

export default MovieReviews;

MovieReviews.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
};