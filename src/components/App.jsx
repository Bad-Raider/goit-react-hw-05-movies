import { Routes, Route, NavLink } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import css from './App.module.css';



export const App = () => {
  return (
    <div>
        {/* <nav className={css.nav}>
          <NavLink to="/" end className={css.active} activeclassname={css.active} >Home</NavLink>
          <NavLink to="/movies" className={css.active} activeclassname={css.active}>Movies</NavLink>
        </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  )
};

export default App;