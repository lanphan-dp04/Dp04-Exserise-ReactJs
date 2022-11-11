import React from "react";
import Typical from "../main/Typical/Typical";
import software from "./stsoftware.json";
export default function StSoftware() {
  return (
    <div className="stsoftware">
      <div className="section-stdevelop">
        <div className="container">
          <div className="stdevelop">
            {software.software.map((item, index) => (
              <div className="stdevelop-box">
                <div className="boxicon">
                  <i className={item.icon}></i>{" "}
                </div>
                <div className="boxcontent">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <a href="/">{item.button}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Typical />
    </div>
  );
}
