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

import { useState, useEffect } from "react";
import Loading from "./app/components/loadingPage/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="app">
      <RouterApp />
      <BtnScrollToTop />
    </div>
  );
}

export default App;
