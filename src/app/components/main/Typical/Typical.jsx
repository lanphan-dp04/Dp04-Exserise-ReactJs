import "./Typical.scss";
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import axios from "axios";
import { useState, useEffect } from "react";

function Typical() {

  const [itemTypical, setItemTypical] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/mainCampus";
  async function fetchDataCampus() {
    try {
      setIsLoad(true);
      let res = await axios.get(url, {});
      let temp = await res.data;
      setIsLoad(false);
      setItemTypical(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchDataCampus(url);
  }, []);

  return (
    <section className="vc_row">
      <div className="container">
        <div className="vc_row-fluid">
          <div className="wpb_column">
                  <div className="wpb_wrapper">
              <div className="houzez-module">
                <h2>Typical successful stories</h2>
                <h3 className="sub-heading">
                  From ideas turned into carefully crafted pixels and problems
                  crafted into solutions.
                </h3>
              </div>
              <div className="vc_empty_space">
                <span></span>
              </div>
              <div className="vc_row">
              {itemTypical.map((item, index) =>{
                return (
                <div className="vc_col-sm-3">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="team-block">
                        <a className="team-block-mobile" href="#d"></a>
                        <img src={item?.avatar} alt="eHealth"></img>
                        <div className="team-caption team-caption-before">
                          <div className="team-caption-in team-caption-inner">
                            <h4 className="team-name">
                              <a href="#a">{item?.name}</a>
                            </h4>
                            <p className="team-designation">
                              {item?.Typical}
                            </p>
                            <ul className="team-social">
                              <li>
                                <a href="https://www.facebook.com/stunited.vn/" className="btn-link">
                                  <FaFacebookSquare/>
                                </a>
                              </li>
                              <li>
                                <a href="#d" className="btn-link">
                                  <FaInstagramSquare/>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="team-caption team-caption-after">
                          <div className="team-caption-inner">
                            <h4 className="team-name">
                              <a href="#w">{item?.name}</a>
                            </h4>
                            <p className="team-designation">
                              <a href="#e">{item?.Typical}</a>
                            </p>
                            <div className="team-description desc">
                              {item?.infor}
                            </div>
                            <ul className="team-social">
                              <li>
                                <a href="https://www.facebook.com/stunited.vn/" className="btn-link">
                                  <FaFacebookSquare/>
                                </a>
                              </li>
                              <li>
                                <a href="#d" className="btn-link">
                                  <FaInstagramSquare/>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Typical;
