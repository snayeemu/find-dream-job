import React, { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeaturedJobs = () => {
  const [featureJobs, setFeatureJobs] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/featureJobs.json");
      const fetchData = await res.json();
      setData(fetchData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setFeatureJobs(data.slice(0, 4));
  }, [data]);

  const handleSeeAll = () => {
    setFeatureJobs(data);
  };

  return (
    <div className="container">
      <h2 className="text-center">Featured Jobs</h2>
      <p className="fw-lighter text-center mb-3">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>
      <div className="row d-flex justify-content-evenly">
        {featureJobs.map((featureJob) => (
          <FeatureJob key={featureJob.id} featureJob={featureJob}></FeatureJob>
        ))}
        <div className="text-center ">
          <button
            onClick={handleSeeAll}
            className="text-white border-0 rounded-2 px-3 py-1 mt-3 mb-5 shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(to left, #7E90FE 0%, #9873FF 100%)",
            }}
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
