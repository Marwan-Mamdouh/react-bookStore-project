import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Layout from "./pages/Layout";
import MovieDetails from "./components/movieDetiles";
import FavMovie from "./pages/favMovie";
import RegistrationForm from "./pages/registrationForm";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <RegistrationForm /> },
      {
        path: "movies",
        children: [
          { index: true, element: <Movies /> },
          { path: ":id", element: <MovieDetails /> },
        ],
      },
      { path: "favMovies", element: <FavMovie /> },
    ],
  },
]);

export default Router;
