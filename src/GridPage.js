import React from "react";
import "./g.css";
import pic1 from "./GridPage Images/digital.jpg";

function GridPage() {
  const fieldname = "Digital Marketing";

  return (
    <div>
      <a href="">
        {" "}
        <div className="job-box">
          <div className="flex">
            <div className="pic">
              <img src={pic1} alt="" />
            </div>
            <div className="text">
              <h2>{fieldname}</h2>
              <a href="">
                See More.... <span>&#8680;</span>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default GridPage;
