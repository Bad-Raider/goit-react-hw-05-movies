import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";


const MoviesItem = ({ title, name, id }) => {
    return (  
        <li>
            <Link to={`/movies/${id}`}>{title || name}</Link>
        </li>
    );
};

export default MoviesItem;