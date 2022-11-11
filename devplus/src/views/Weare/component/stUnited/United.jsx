import React from 'react'
import "../../component/MainWeare.scss"
import axios from "axios";
import { useState, useEffect } from "react";

export default function United() {

  const [itemUnited, setItemUnited] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/United";
  async function fetchDataCampus() {
    try {
      setIsLoad(true);
      let res = await axios.get(url, {});
      let temp = await res.data;
      setIsLoad(false);
      setItemUnited(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchDataCampus(url);
  }, []);

  return (
        <div className='vc-row'>
        <div className='vc_column-inner'>
          <div className='wpb_wrapper'>
            <div className='vc_inner'>
              <div className='vc_column_container'>
                {itemUnited.map((item, index)=>{
                    return (
                        <div key={index} className='wpb_content_element'>
                            <span>{item?.title}</span>
                            <p>{item?.infor}</p>
                        </div>
                    )
                })}
              </div>
            </div>
            <div className='wpb_text_column'>
              <div className="wpb_wrapper-chil">
                <h4>…and many other cool stories..</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
