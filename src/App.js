import Navbar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutme";
import Experience from "./components/Experience/experience";
import Contact from "./components/ContactForm/contact";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
          <Navbar></Navbar>
          {/* <Routes>
            <Route path="/" element={<Navbar />}/>
            <Route index element={<Header />}/>
            <Route path="/AboutMe" element={<AboutMe />}/>
            <Route path="/Experience" element={<AboutMe />}/>
            <Route path="/Contact" element={<AboutMe />}/>
          </Routes> */}
          <Header></Header>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Contact></Contact>
          <Footer></Footer>
      </div>
    // </BrowserRouter>
  );
}

export default App;
