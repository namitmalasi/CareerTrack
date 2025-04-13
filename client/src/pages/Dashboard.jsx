import React from "react";
import JobCard from "../components/JobCard";
import { useJobs } from "../context/JobsContext";

const Dashboard = () => {
  const { jobs } = useJobs();

  if (!jobs.length) return <p className="text-gray-500">No jobs added yet.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Dashboard;
