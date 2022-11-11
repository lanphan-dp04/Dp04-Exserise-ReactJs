import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function JoinUs() {
  const [itemMainDev, setItemMainDev] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://636dab7a91576e19e32cef5d.mockapi.io/joinUs";
  async function fetchDataCampus() {
    try {
      setIsLoad(true);
      let res = await axios.get(url, {});
      let temp = await res.data;
      setIsLoad(false);
      setItemMainDev(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchDataCampus(url);
  }, []);

  return (
    <div className="js-close join-us">
      <div className="container">
        <div className="join-us-title">
          <h2>
            Building a startup is hard <br /> So we build a family to make it
            more enjoyable.
          </h2>
        </div>

        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="houzez-module module-title text-center"></div>
            <div className="houzez-module module-service">
              <div className="row-no-margin">
                {itemMainDev.map((item, index) => {
                  return (
                    <div className="module-item" key={index}>
                      <div className="service-block">
                        <div className="block-icon">
                          <img src={item?.icon} alt=""></img>
                        </div>
                        <div className="block-content">
                          <h3>{item?.title}</h3>
                          <p>{item?.content}</p>
                          <a href="#a" className="find">
                            {item?.more}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
