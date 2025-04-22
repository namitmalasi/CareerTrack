import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobsContext";
import { useEffect, useState } from "react";

const EditJob = () => {
  const { id } = useParams();
  const { jobs, updateJob } = useJobs();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const jobToEdit = jobs.find((j) => j.id === Number(id));
    if (jobToEdit) {
      setFormData(jobToEdit);
    }
  }, [id, jobs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateJob(formData, id);
    navigate("/");
  };

  if (!formData) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-1"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Job Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Freelance</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Applied Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default EditJob;
