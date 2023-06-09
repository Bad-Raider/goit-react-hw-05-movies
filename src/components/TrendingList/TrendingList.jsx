import { useEffect, useState  } from 'react';
import { fetchTraidingMovies } from 'helper/API';
import MoviesList from 'components/MoviesList/MoviesList';

const TrendingList = () => {

    const [filmInfo, setFilmInfo] = useState('');

    useEffect(() => {
        fetchTraidingMovies()
            .then(data => setFilmInfo(data.results))
            .catch(err => console.log(err));        
    }, []);
    
    
    return (
        <>
            <h1>title</h1>
            {filmInfo && (<MoviesList arrMovies={filmInfo} />)}
        </>
    );
};

export default TrendingList;