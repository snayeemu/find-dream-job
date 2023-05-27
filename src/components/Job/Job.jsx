/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Job = ({ job }) => {
  const { amountOfAvailableJobs, jobCategory, jobLogo } = job;
  return (
    <div
      className="p-4 border rounded-3 shadow-sm mb-2"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
      }}
    >
      <img src={jobLogo} alt="" />
      <h6 className="mt-2">{jobCategory}</h6>
      <p className="fw-lighter">
        <small>{amountOfAvailableJobs}+ Jobs Available</small>
      </p>
    </div>
  );
};

export default Job;
