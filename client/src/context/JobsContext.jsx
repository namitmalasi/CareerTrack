import { createContext, useContext, useEffect, useState } from "react";

const JobsContext = createContext();

export const useJobs = () => useContext(JobsContext);

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) setJobs(JSON.parse(storedJobs));
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, { ...job, id: Date.now() }]);
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  );
};
