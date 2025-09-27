import "./style/style.css";
import Router from "./router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import MoviesContextProvider from "./context/moviesContext";

function App() {
  return (
    <Provider store={store}>
      <MoviesContextProvider>
        <RouterProvider router={Router}></RouterProvider>
      </MoviesContextProvider>
    </Provider>
  );
}

export default App;
