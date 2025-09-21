import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BasicExample from "./components/header";
// import Parent from "./components/parent";
// import Movies from "./components/movies";
// import Footer from "./components/footer";
// import PhotoGallery from "./components/gallery";
// import SlideShow from "./components/slideShow";
import "./css/style.css";
import Home from "./pages/home";
import Movies from "./components/movies";
import About from "./pages/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <BasicExample></BasicExample>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Parent></Parent> */}
      {/* <Movies></Movies>
      <SlideShow></SlideShow> */}
      {/* <PhotoGallery></PhotoGallery> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
