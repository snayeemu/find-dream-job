/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
      }}
    >
      <div className="container py-5 my-4 d-flex flex-column-reverse d-md-flex flex-md-row justify-content-between">
        <div>
          <h1 className="mt-3">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-primary ">Dream Job</span>
          </h1>
          <p className="fw-lighter my-4">
            <small>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </small>
          </p>
          <div>
            <button
              style={{
                backgroundImage:
                  "linear-gradient(to left, #7E90FE 0%, #9873FF 100%)",
              }}
              className="text-white border-0 rounded-2 px-3 py-1 mb-3 cursor-none"
            >
              Get Started
            </button>
          </div>
        </div>
        <img
          style={{ maxHeight: "50% !important", height: "auto", width: "43%" }}
          src="./All-Images/P3OLGJ1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
