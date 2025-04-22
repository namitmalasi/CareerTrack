import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const JobsContext = createContext();

export const useJobs = () => useContext(JobsContext);

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   const storedJobs = localStorage.getItem("jobs");
  //   if (storedJobs) setJobs(JSON.parse(storedJobs));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("jobs", JSON.stringify(jobs));
  // }, [jobs]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs", {
          withCredentials: true,
        });
        setJobs(res.data);
      } catch (err) {
        setJobs(null);
      }
    };

    fetchJobs();
  }, []);

  const addJob = async (job) => {
    try {
      const res = await axios.post("http://localhost:5000/api/jobs", job, {
        withCredentials: true,
      });
      setJobs((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error adding job:", err);
    }
  };

  const updateJob = async (updatedJob, id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/jobs/${id}`,
        updatedJob,
        {
          withCredentials: true,
        }
      );
      setJobs((prev) => prev.map((job) => (job._id === id ? res.data : job)));
    } catch (err) {
      console.error("Error updating job:", err);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
        withCredentials: true,
      });
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, deleteJob, updateJob }}>
      {children}
    </JobsContext.Provider>
  );
};
