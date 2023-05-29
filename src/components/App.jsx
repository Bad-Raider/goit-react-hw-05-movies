import { Routes, Route, } from "react-router-dom";
import {Link, Nav, Header} from './App.styled';
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";

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
      </Routes>
    </>
  );
};

export default App;




