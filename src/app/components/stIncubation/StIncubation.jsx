import React from "react";
import incubation from "./incubation.json";

export default function StIncubation() {
  return (
    <div className="js-close incubation">
      <div className="container">
        <div className="introduc">
          <h1>ST Incubation</h1>
          <p>
            After long time working in software development outsourcing
            industry, founders of <strong>ST United</strong> still keep intense
            aspiration how to apply the high technologies to solve the society
            problem in Vietnam.
          </p>
          <p>
            Beginning as a provider of co-working spaces with{" "}
            <strong>IoT Space</strong> and Nomad Space in Danang,{" "}
            <strong>ST United</strong> would like to support the startup and ICT
            community. Moreover, <strong>ST United</strong> provides incubator
            programs for budding entrepreneurs. The program focuses on providing
            resources and support for startups in terms of business modeling,
            market penetration and even product development.{" "}
          </p>
        </div>

        <div className="divison">
          {/* map o day */}
          {incubation.incubation.map((item, index) => (
            <div className="divison-container" key={index}>
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
      </div>
    </div>
  );
}
