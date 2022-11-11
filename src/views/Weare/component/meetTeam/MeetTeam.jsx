import "../../component/MainWeare.scss"
import axios from "axios";
import { useState, useEffect } from "react";


export default function MeetTeam() {

    const [itemTeam, setItemTeam] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    let url = "https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/MeetTeam";
    async function fetchDataCampus() {
    try {
        setIsLoad(true);
        let res = await axios.get(url, {});
        let temp = await res.data;
        setIsLoad(false);
        setItemTeam(temp);
    } catch (err) {
        console.log("Error: ", err.message);
    }
  }

    useEffect(() => {
        fetchDataCampus(url);
    }, []);

    return (
            <div className='agents-module'>
                <div className='agents-blocks-main'>
                    {itemTeam.map((item, index) =>{
                        return (
                            <div key={index} className='col-md-4'>
                                <div className='agents-block'>
                                    <div className="block-icon">
                                        <img src={item?.avatar} alt=""></img>
                                    </div>
                                    <div className='auther-thumb'>
                                        <a href="#hihi">{item?.name}</a>
                                    </div>
                                    <div className='block-body'>
                                        <span>{item?.position}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}
