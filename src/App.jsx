import './App.css';
import Navbar from "./components/navbar";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/homePage";
import About from "./pages/aboutPage";
import Contact from "./pages/contactPage";

const App = () => {

  return (
    <>
    <HashRouter>
      <Navbar/>

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      </HashRouter>
    </>
  );
};

export default App;
