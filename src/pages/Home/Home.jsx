import { Container } from '../../components/App.styled';
import TrendingList from 'components/TrendingList/TrendingList';


const Home = () => {

    return (
        <main>
            <Container>
                <TrendingList/>
            </Container>
        </main>
    );
};

export default Home;