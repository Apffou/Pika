
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./composants/Header/Header";
import Banner from "./composants/Banner/Banner";
import Footer from "./composants/Footer/Footer";
import Home from "../src/composants/Pages/Home";
import About from '../src/composants/Pages/About';
import ArticlePage from "./composants/Pages/ArticlePage"
import Page404 from "./composants/Pages/Page404";


function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="banner-content">
        <Banner Firsttitle="Pika" Secondtitle="Petite Cairn Terrier" />
      </section>
      <section>

      </section>
      <Routes>
        <Route path="/" element={<Home nom="Home" />} />
        <Route path="/about" element={<About nom="about" />} />
        <Route path="/years/:idyears" element={<ArticlePage />} />
        <Route path="/*" element={<Page404 nom="Page404" />} />
      </Routes >
      <Footer />
    </>
  );
}

export default App;
