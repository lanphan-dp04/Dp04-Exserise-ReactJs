import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app/stylesheet/style.scss";
import "./App.css";
import MainDev from "./app/components/main/mainDev/MainDev";
import Footer from "./app/components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./app/stylesheet/style.scss"
import './App.css';
import Header from "./app/components/header/Header";
import Main from "./app/components/main/Main";


function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer />
    </>
  );
}

export default App;
