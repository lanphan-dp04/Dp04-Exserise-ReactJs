import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-menu">
              <h3 className="footer-top-menu-title"> MENU</h3>

              <div className="footer-top-menu-listbox">
                <div className="footer-top-menu-box">
                  <ol className="footer-top-menu-boxlist">
                    <li className="footer-top-menu-list">
                      <a href="/" className="footer-top-menu-link">
                        HOME
                      </a>
                    </li>
                    <li className="footer-top-menu-list">
                      <a href="/" className="footer-top-menu-link">
                        WHAT WE DO
                      </a>
                      <ol className="whatwedo-menu">
                        <li className="whatwedo-menu-item">
                          <a href="/" className="footer-top-menu-link">
                            ST SOFTWARE
                          </a>
                        </li>
                        <li className="whatwedo-menu-item">
                          <a href="/" className="footer-top-menu-link">
                            ST DIGITAL
                          </a>
                        </li>
                        <li className="whatwedo-menu-item">
                          <a href="/" className="footer-top-menu-link">
                            ST INCUBATION
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>

                <div className="footer-top-intro-box">
                  <ol className="footer-top-menu-boxlist">
                    <li className="footer-top-menu-list">
                      <a href="/" className="footer-top-menu-link">
                        WHO WE ARE
                      </a>
                    </li>
                    <li className="footer-top-menu-list">
                      <a href="/" className="footer-top-menu-link">
                        PORTFOLIO
                      </a>
                    </li>
                    <li className="footer-top-menu-list">
                      <a href="/" className="footer-top-menu-link">
                        JOIN US
                      </a>
                    </li>
                    <li className="footer-top-menu-list">
                      <a href="/" className="footer-top-menu-link">
                        LET'S TALK
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="footer-top-contact">
              <h3 className="footer-top-contact-title">CONTACT US</h3>
              <p>Nomad Space</p>
              <ol className="footer-top-contact-boxlist">
                <li className="footer-top-contact-list">
                  <i className="fa fa-location-arrow"></i>
                  <span>14 An Thuong 18, Da Nang</span>
                </li>
                <li className="footer-top-contact-list">
                  <i className="fa fa-phone"></i>
                  <span>Call us +84 905 610 299</span>
                </li>
                <li className="footer-top-contact-list">
                  <i className="fa fa-envelope"></i>
                  <span>
                    <a href="mailto:info@stdsoftware.com">
                      info@stdsoftware.com
                    </a>
                  </span>
                </li>
              </ol>
            </div>

            <div className="footer-top-fanpage">
              <iframe
                name="f3cd4be816abc7c"
                width="1000px"
                height="1000px"
                data-testid="fb:page Facebook Social Plugin"
                title="fb:page Facebook Social Plugin"
                frameBorder={0}
                allowtransparency="true"
                allowFullScreen
                scrolling="no"
                allow="encrypted-media"
                src="https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&amp;app_id=217780371604666&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df969e06050c018%26domain%3Dstunited.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fstunited.vn%252Ff12695ff9109e2c%26relation%3Dparent.parent&amp;container_width=370&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fstunited.vn&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false&amp;width="
                style={{
                  border: "none",
                  visibility: "visible",
                  width: "340px",
                  height: "130px",
                }}
              ></iframe>
              {/* <div className="footer-top-fanpage-boxlogo">
                <a
                  href="https://www.facebook.com/stunited.vn/"
                  className="fanpage-logo"
                >
                  <img src="./Footerimage/stlogo.jpg" alt="stunited" />
                </a>

                <div className="fanpage-follower">
                  <a href="https://www.facebook.com/stunited.vn/"> ST United</a>
                  <p>1,694 followers</p>
                </div>
              </div>
              <div className="footer-top-fanpage-boxitem">
                <div className="fanpage-follow item">
                  <a href="https://www.facebook.com/106430790712933">
                    <i class="_3-8_ img sp_5mhmaH8rzNW sx_2fcf18"></i>Follow
                    Page
                  </a>
                </div>
                <div className="fanpage-contactus item">
                  <a href="https://www.facebook.com/106430790712933">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} />{" "}
                    </span>
                    Contact Us
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-boxcontent">
            <p className="content">Copyright © 2019 by ST United.</p>
          </div>
        </div>
      </div>
    </>
  );
}
