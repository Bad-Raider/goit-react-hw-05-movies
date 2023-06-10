import { Container } from '../components/App.styled';
import { useEffect, useState  } from 'react';
import { fetchTraidingMovies } from 'helper/API';
import MoviesList from 'components/MoviesList/MoviesList';



const Home = () => {
    
    const [filmInfo, setFilmInfo] = useState('');

    useEffect(() => {
        fetchTraidingMovies()
            .then(data => 
               
                setFilmInfo(data.results)
            )
            .catch(err => console.log(err));        
    }, []);

    return (
        <main>
            <Container>
                <>
            <h1>Trending today</h1>
            {filmInfo && (<MoviesList arrMovies={filmInfo} />)}
        </>
            </Container>
        </main>
    );
};

export default Home;