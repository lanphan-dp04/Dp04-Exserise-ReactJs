import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { dataBanner } from '../../../config/config.Api';
import Reveal from 'react-reveal/Reveal';


const Banner = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await dataBanner().catch((err) => {
      console.log("ERROR", err);
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const setting = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    // prevArrow: true,
    // nextArrow: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       infinite: true,
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };
  
  return (
    <section className="section-banner">
    <Slider {...setting}>
    {data.map((element) => {
      return (
        <div key={element.id}  className="banner-wrapper">
          <div className="image-wrapper">
            <img src={element.srcBanner} alt="banner" />
          </div>
            <div className="wrapper-content">
          <Reveal effect="fadeInUp">
              <p className="banner-content">{element.content}</p> 
          </Reveal>
            </div>
        </div>
      )
    })} 
     </Slider>
     <div className="bg-wrapper"></div>
    </section>
  )
}

export default Banner