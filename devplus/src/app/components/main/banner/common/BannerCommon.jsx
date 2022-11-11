import React, { useState } from 'react'
import { dataCommonBanner } from '../../../../config/config.Api';

const BannerCommon = (props) => {
  
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await dataCommonBanner(props.id).catch((err) => {
      console.log("ERROR", err);
    });
    setData(response.data);
  };

  useState(() => {
    fetchData();
  }, [props.id]);

  return (
    <section className="section-banner banner-common">
      <div className="banner-wrapper">
          <div className="image-wrapper">
            <img src={data.srcImage} alt="banner" />
          </div>
            <div className="common-content-wrapper">
              <h1>{data.title}</h1>
              <h2>{data.content}</h2> 
            </div>
        </div>
        <div className="bg-wrapper bg-wrapper-common"></div>
    </section>
  )
}

export default BannerCommon