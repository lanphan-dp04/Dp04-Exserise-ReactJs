import "./Loading.scss"
import img_loading from "../../assets/header/logo-ST.png"

export default function Loading() {
    return (
        <div className="body">
          <div className="center">
            <div className="ring"></div>
            <img
              src={img_loading}
              alt="logo_loading"
              style={{ width: "600", height: "400" }}
              className="center_img"
            ></img>
          </div>
        </div>
      );
    }
