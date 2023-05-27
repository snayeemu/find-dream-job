import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDollarSign,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./ShowDetails.css";
import { addToDb } from "../../utilities/fakeDB";

const ShowDetails = () => {
  const id = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/featureJobs.json")
      .then((res) => res.json())
      .then((dt) => {
        const job = dt.find((aJob) => aJob.id === id);
        setData(job);
      });
  }, []);

  const handleAddToDb = (id) => {
    addToDb(id);
  };

  return (
    <>
      <div className="bg-showDetails">
        <div className="text-center p-5 bg-showDetails-2">
          <h2>Job Details</h2>
        </div>
      </div>
      <div className="my-5 py-5 container ">
        <div className="row d-flex justify-content-center">
          <div className="col-7">
            <p>
              <span className="fw-bolder">Job Description: </span>{" "}
              <span className="fw-lighter">
                {data?.jobDetails?.jobDescription}
              </span>
            </p>
            <p>
              <span className="fw-bolder">Job Responsibility: </span>{" "}
              <span className="fw-lighter">
                {data?.jobDetails?.jobResponsibility}
              </span>
            </p>
            <p>
              <span className="fw-bolder">
                Educational Requirements: <br />
              </span>
              <span className="fw-lighter">
                {data?.jobDetails?.educationalRequirements}
              </span>
            </p>
            <p>
              <span className="fw-bolder">
                Experiences: <br />
              </span>{" "}
              <span className="fw-lighter">
                {data?.jobDetails?.experiences}
              </span>
            </p>
          </div>
          <div className="col-3">
            <div className="bg-job-details p-3 rounded">
              <h6>Job Details</h6>
              <hr />
              <div>
                <div className="d-flex gap-2">
                  <FontAwesomeIcon
                    className="mt-1 text-primary opacity-50"
                    icon={faDollarSign}
                  />
                  <h6>
                    Salary:{" "}
                    <span className="fw-lighter">{data?.salaryRange}</span>
                  </h6>
                </div>
                <div className="d-flex gap-2">
                  <FontAwesomeIcon
                    className="mt-1 text-primary opacity-50"
                    icon={faCalendarDays}
                  />
                  <h6>
                    Job Title:{" "}
                    <span className="fw-lighter">{data?.jobName}</span>
                  </h6>
                </div>
              </div>
              <h6 className="mt-3 mb-1">Contact Information</h6>
              <hr />
              <div className="d-flex gap-2">
                <FontAwesomeIcon
                  className="mt-1 text-primary opacity-50"
                  icon={faPhoneVolume}
                />
                <h6>
                  Phone:{" "}
                  <span className="fw-lighter">{data?.jobDetails?.phone}</span>
                </h6>
              </div>
              <div className="d-flex gap-2">
                <FontAwesomeIcon
                  className="mt-1 text-primary opacity-50"
                  icon={faEnvelope}
                />
                <h6>
                  Email:{" "}
                  <span className="fw-lighter">{data?.jobDetails?.email}</span>
                </h6>
              </div>
              <div className="d-flex gap-2">
                <FontAwesomeIcon
                  className="mt-1 text-primary opacity-50"
                  icon={faLocationDot}
                />
                <h6>
                  Address:{" "}
                  <span className="fw-lighter">{data?.jobLocation}</span>
                </h6>
              </div>
            </div>
            <div className="text-center" onClick={() => handleAddToDb(data.id)}>
              <button
                className="text-white border-0 rounded-2 px-3 py-1 mt-3 mb-5 shadow-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #7E90FE 0%, #9873FF 100%)",
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
