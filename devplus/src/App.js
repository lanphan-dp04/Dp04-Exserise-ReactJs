import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app/stylesheet/style.scss";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RouterApp from "./routers/RouterApp";

function App() {
  return (
      <div className="app">
        <RouterApp/>
      </div>
  );

}

export default App;
