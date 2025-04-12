import React from "react";
import JobCard from "../components/JobCard";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "OpenAI",
    location: "Remote",
    status: "Interview",
    type: "Full-Time",
    date: "Apr 10, 2025",
  },
  {
    id: 2,
    title: "React Intern",
    company: "Startify",
    location: "Bangalore",
    status: "Applied",
    type: "Internship",
    date: "Apr 5, 2025",
  },
  {
    id: 3,
    title: "SDE 1",
    company: "Amazon",
    location: "Hyderabad",
    status: "Rejected",
    type: "Full-Time",
    date: "Mar 22, 2025",
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {mockJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Dashboard;
