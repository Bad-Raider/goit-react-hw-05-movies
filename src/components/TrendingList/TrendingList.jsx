import { useEffect, useState  } from 'react';
import TrendingItem from '../../components/TrendingItem/TrendingItem';
import fetchTraidingFilms from 'helper/API';

const TrendingList = () => {

    const [filmInfo, setFilmInfo] = useState('');

    useEffect(() => {

        fetchTraidingFilms.then(data => {
            const arrayInfo = data.results
            setFilmInfo(arrayInfo);
        });
        
    }, []);
    
    console.log(filmInfo);
    
    return (
        <>
        <h1>title</h1>
        <ul>
            {
                filmInfo &&
                (filmInfo.map(film =>
                    <TrendingItem
                        key={film.id}
                        title={film.title}
                        name={film.name}
                    />
                ))
            }
        </ul>
    </>
    );
};

export default TrendingList;