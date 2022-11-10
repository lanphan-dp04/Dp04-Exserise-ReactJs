import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { dataPartners } from '../../../config/config.Api';

const Partners = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await dataPartners().catch((err) => {
      console.log("ERROR", err);
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // prevArrow: true,
    // nextArrow: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     infinite: true,
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="section-partners">
      <div className="container container-sm container-lg">
        <h2 className="partners-title">
          Trusted by the Clients & Partners
        </h2>
        <Slider {...setting} >
        {data.map((element) => {
          console.log(element.linkweb);
          return (
            <div className="partner-wrapper">
              <div className="partner-wrapper-link">
                <a href={element.linkweb} className="partner-link">
                  <img src={element.srcimage} alt="img-partners" />
                </a>
              </div>
            </div>
          )
        })}
        </Slider>
      </div>
    </section>
  )
}

export default Partners