/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const JobCategory = () => {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch("/jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);

  return (
    <div className="container my-5 py-5">
      <h2 className="text-center">Job Category List</h2>
      <p className="fw-lighter text-center">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>
      <div className="d-md-flex justify-content-evenly mt-4">
        {jobList.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
