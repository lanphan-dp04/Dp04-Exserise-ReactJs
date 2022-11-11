import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app/stylesheet/style.scss";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RouterApp from "./routers/RouterApp";
import Header from "./app/components/header/Header";
import Footer from "./app/components/footer/Footer";
import BtnScrollToTop from "./app/components/btnScroll/Scroll";

function App() {
  return (
      <div className="app">
        {/* <Header/> */}
        <RouterApp/>
        <BtnScrollToTop/>
        {/* <Footer/> */}
      </div>
  );
}

export default App;