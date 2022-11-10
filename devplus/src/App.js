import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app/stylesheet/style.scss";
import "./App.css";
import Typical from "./app/components/main/Typical/Typical";
import MainDev from "./app/components/main/mainDev/MainDev";
import Footer from "./app/components/footer/Footer";
import SlideClient from "./app/components/main/slideClient/SlideClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./app/stylesheet/style.scss"
import './App.css';
import Header from "./app/components/header/Header";
import Main from "./app/components/main/Main";


function App() {
  return (
    <>
      <Typical />
      <MainDev />
      <Footer />
      <Header/>
      <Main/>
    </>
  );
}

export default App;
