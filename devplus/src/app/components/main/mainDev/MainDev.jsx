import "./MainDev.scss"
import axios from "axios";
import { useState, useEffect } from "react";

 function MainDev() {
    
  const [itemMainDev, setItemMainDev] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/mustHave";
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
    <div className="ss-dev">
        <div className="container">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="houzez-module module-title text-center"> 
                        <h2>WE DEVELOP | WE SUPPORT | WE IMPROVE</h2>
                        <h3>Launch your ideas. Execute your plans. Maximize project success.</h3>
                    </div>
                        <div className="houzez-module module-service">
                            <div className="row-no-margin">
                            {itemMainDev.map((item, index) =>{
                                return(
                                        <div className="module-item" key={index}>
                                            <div className="service-block">
                                                <div className="block-icon">
                                                    <img src={item?.icon} alt=""></img>
                                                </div>
                                                <div className="block-content">
                                                    <h3>{item?.name}</h3>
                                                    <p>{item?.title}</p>
                                                    <a href="#a" className="find">{item?.more}</a>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                            
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default MainDev;