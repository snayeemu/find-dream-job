import React, { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";
import { getSavedJobs } from "../../utilities/fakeDB";
import DropdownButton from "../DropdownButton/DropdownButton";

const AppliedJobs = () => {
  const savedJobsIds = getSavedJobs();
  const [filteredSaveJobs, setFilteredSavedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    fetch("/featureJobs.json")
      .then((res) => res.json())
      .then((data) => {
        const saved = data.filter((job) => job.id === savedJobsIds[job.id]);
        setSavedJobs(saved);
      });
  }, []);

  useEffect(() => {
    fetch("/featureJobs.json");
    setFilteredSavedJobs(savedJobs);
  }, [savedJobs]);

  const handleRemote = () => {
    const remoteJobs = savedJobs.filter((job) => job.isRemote);
    setFilteredSavedJobs(remoteJobs);
  };

  const handleOnside = () => {
    const remoteJobs = savedJobs.filter((job) => !job.isRemote);
    setFilteredSavedJobs(remoteJobs);
  };

  return (
    <div className="container">
      <div className="bg-showDetails">
        <div className="text-center p-5 bg-showDetails-2">
          <h2>Applied Jobs</h2>
        </div>
      </div>

      <div>
        <div className="mt-5 pt-5 text-end mb-2">
          <DropdownButton
            handleRemote={handleRemote}
            handleOnside={handleOnside}
          ></DropdownButton>
        </div>
        <div>
          {filteredSaveJobs.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
