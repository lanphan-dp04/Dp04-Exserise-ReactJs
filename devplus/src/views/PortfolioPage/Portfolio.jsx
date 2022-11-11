import React from "react";
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import axios from "axios";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [itemPortfolio, setItemPortfolio] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://636dab7a91576e19e32cef5d.mockapi.io/portfolio";
  async function fetchDataCampus() {
    try {
      setIsLoad(true);
      let res = await axios.get(url, {});
      let temp = await res.data;
      setIsLoad(false);
      setItemPortfolio(temp);
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
                  Meeting deadlines and ensuring high standards are our style of
                  life. 82% of our customers have chosen our team for their 2nd
                  project.
                </h3>
              </div>
              <div className="vc_empty_space">
                <span></span>
              </div>
              <div className="vc_row">
                {itemPortfolio.map((item, index) => {
                  return (
                    <div className="vc_col-sm-3">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="team-block">
                            <a className="team-block-mobile" href="#d"></a>
                            <img src={item?.image} alt="eHealth"></img>
                            <div className="team-caption team-caption-before">
                              <div className="team-caption-in team-caption-inner">
                                <h4 className="team-name">
                                  <a href="#a">{item?.team}</a>
                                </h4>
                                <p className="team-designation">
                                  {item?.language}
                                </p>
                                <ul className="team-social">
                                  <li>
                                    <a
                                      href="https://www.facebook.com/stunited.vn/"
                                      className="btn-link"
                                    >
                                      <FaFacebookSquare />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#d" className="btn-link">
                                      <FaInstagramSquare />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="team-caption team-caption-after">
                              <div className="team-caption-inner">
                                <h4 className="team-name">
                                  <a href="#w">{item?.team}</a>
                                </h4>
                                <p className="team-designation">
                                  <a href="#e">{item?.language}</a>
                                </p>
                                <div className="team-description desc">
                                  {item?.description}
                                </div>
                                <ul className="team-social">
                                  <li>
                                    <a
                                      href="https://www.facebook.com/stunited.vn/"
                                      className="btn-link"
                                    >
                                      <FaFacebookSquare />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#d" className="btn-link">
                                      <FaInstagramSquare />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
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
    </section>
  );
}

export default Portfolio;
