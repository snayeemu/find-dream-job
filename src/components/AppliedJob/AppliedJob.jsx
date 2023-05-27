import React from "react";
import "./AppliedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    companyLogo,
    companyName,
    isFullTime,
    isRemote,
    jobLocation,
    jobName,
    salaryRange,
    id,
  } = job;
  return (
    <div className="border border-2 rounded-3 p-3 shadow mb-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-5 align-items-center">
          <div>
            <img
              className="img-width-applied img-fluid"
              src={companyLogo}
              alt=""
            />
          </div>
          <div>
            <h5>{jobName}</h5>
            <p className="fw-lighter">{companyName}</p>
            <div className="d-flex gap-3">
              <h6 className="border px-3 py-2 rounded bg-primary bg-opacity-10 text-primary border-primary">
                {isRemote ? "Remote" : "Onsite"}
              </h6>
              <h6 className="border px-3 py-2 rounded bg-primary bg-opacity-10 text-primary border-primary">
                {isFullTime ? "Full Time" : "Part Time"}
              </h6>
            </div>
            <div className="d-flex gap-3 fw-lighter">
              <div className="d-flex gap-2 ">
                <FontAwesomeIcon className="mt-1" icon={faLocationDot} />
                <p>{jobLocation}</p>
              </div>
              <div className="d-flex gap-2">
                <FontAwesomeIcon className="mt-1" icon={faDollarSign} />
                <p>Salary: {salaryRange}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/showDetails/${id}`}>
            <button
              style={{
                backgroundImage:
                  "linear-gradient(to left, #7E90FE 0%, #9873FF 100%)",
              }}
              className="text-white border-0 rounded-2 px-3 py-1"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
