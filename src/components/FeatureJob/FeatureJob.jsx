import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FeatureJob = ({ featureJob }) => {
  const {
    id,
    companyLogo,
    companyName,
    isFullTime,
    isRemote,
    jobLocation,
    jobName,
    salaryRange,
  } = featureJob;
  return (
    <div className="col-12 col-md-5 mb-3 border d-flex flex-column p-4 rounded-4 shadow">
      <div>
        <img className="mb-2" src={companyLogo} alt="" />
      </div>
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
      <div className="d-flex gap-5 fw-lighter">
        <div className="d-flex gap-2 ">
          <FontAwesomeIcon className="mt-1" icon={faLocationDot} />
          <p>{jobLocation}</p>
        </div>
        <div className="d-flex gap-2">
          <FontAwesomeIcon className="mt-1" icon={faDollarSign} />
          <p>Salary: {salaryRange}</p>
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
  );
};

export default FeatureJob;
