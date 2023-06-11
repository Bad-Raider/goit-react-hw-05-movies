import { Container } from '../components/App.styled';
import { useEffect, useState  } from 'react';
import { fetchTraidingMovies } from 'helper/API';
import MoviesList from 'components/MoviesList/MoviesList';



const Home = () => {
    
    const [filmInfo, setFilmInfo] = useState('');

    useEffect(() => {
        fetchTraidingMovies()
            .then(data => {   
               const filteredResults = data.results.map(
                    ({ title, poster_path, id }) => {
                        return { title, poster_path, id };
                    }
                );
                setFilmInfo(filteredResults)
            })
            .catch(err => console.log(err));        
    }, []);

    return (
            <Container>
                <>
                    <h1>Trending today</h1>
                    {filmInfo && (<MoviesList arrMovies={filmInfo} />)}
                </>
            </Container>
    );
};

export default Home;