import { Routes, Route, Link } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import css from './App.module.css';

export const App = () => {
  return (
    <div>
        <nav className={css.nav}>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  )
};

export default App;