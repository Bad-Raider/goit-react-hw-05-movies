import { Routes, Route } from "react-router-dom";
import { Link, Nav, Header } from './App.styled';
import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesDetails from "pages/MoviesDetails";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import NotPage from "pages/NotPage";

export const App = () => {

  return (
    <>
      <Header>
        <Nav>
          <Link to="/" end> Home</Link>
          <Link to="/movies"> Movies</Link>
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        
        <Route path="/movies/:id/" element={<MoviesDetails/>}>
          <Route path="cast" element={<MovieCast/>} />
          <Route path="reviews" element={<MovieReviews/>} />
        </Route>
        <Route path="*" element={<NotPage/>} />
        </Routes>
    </>
  );
};

export default App;




