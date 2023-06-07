import { useState } from "react";
import MoviesForm from "components/MoviesForm/MoviesForm";

const MoviesInfo = () => {  

    const [name, setName] = useState('');
    // const [arrMovies, setArrMovies] = useState('');

    

    const onSubmit = (name) => {
        setName(name);
    };

    console.log(name);

    return (
        // <div>MoviesInfo</div>
        <MoviesForm onSubmit={onSubmit} />
 )    
}

export default MoviesInfo;
