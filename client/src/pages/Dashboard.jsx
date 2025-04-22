import React, { useState } from "react";
import JobCard from "../components/JobCard";
import { useJobs } from "../context/JobsContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const { jobs } = useJobs();

  const filteredJobs = jobs.filter((job) => {
    // const matchesSearch =
    //   job.title.toLowerCase().includes(searchText.toLowerCase()) ||
    //   job.company.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus = statusFilter === "All" || job.status === statusFilter;

    const matchesType = typeFilter === "All" || job.type === typeFilter;

    return matchesStatus && matchesType;
  });

  if (!jobs.length) return <p className="text-gray-500">No jobs added yet.</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Jobs</h2>
        <Link
          to="/add-job"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Job
        </Link>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by title or company"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 border rounded-md w-full"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded-md w-full"
        >
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border rounded-md w-full"
        >
          <option value="All">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Freelance">Freelance</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-600">No jobs found.</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
