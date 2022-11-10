import React from "react";
import info from "./digitalMember.json";
import divison from "./digitalDivison.json";

export default function StDigital() {
  return (
    <div className="stdigital">
      <div className="container">
        <div className="introduc">
          <h1>ST Digital</h1>
          <p>
            <strong>ST Digital</strong> offers professional offshore digital
            marketing services that can make your business stand out from the
            digital crowd. Our digital marketing services range from search
            engine optimisation (SEO), social media services, email marketing
            services, content outsourcing, and graphic design services, which
            aids in creating organic engagement and direct traffic towards your
            website and its content. Through partnering with ST, we can help you
            create a good lasting impression online and give you an edge over
            your top competitors!
          </p>
        </div>

        <div className="divison">
          {/* map o day */}
          {divison.divison.map((item, index) => (
            <div className="divison-container">
              <div className="boxicon">
                <img src={item.image} alt="St" className="icon-image" />
              </div>
              <div className="boxcontent">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="meetourteam">
          <h3>Meet Our Team</h3>

          {/* map o day */}
          <div className="meetourteam-container">
            {info.info.map((staff, index) => (
              <div className="boxmember">
                <div className="member-image">
                  <img src={staff.image} alt="stmember" />
                </div>
                <div className="member-info">
                  <p>
                    <strong>{staff.name}</strong>
                    <br />
                    {staff.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
