import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(()=>import("./Layout/Layout"))
const Home = lazy(() => import("../pages/Home"))
const Movies = lazy(() => import("../pages/Movies"))
const MoviesDetails = lazy(() => import("../pages/MoviesDetails"))
const MovieCast = lazy(() => import("./MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"))
const NotPage = lazy(() => import("../pages/NotPage"))


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id/" element={<MoviesDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotPage />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;




