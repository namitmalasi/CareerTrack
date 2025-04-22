import { useJobs } from "../context/JobsContext";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const { deleteJob } = useJobs();
  const { _id, title, company, location, status, type, date } = job;

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">
            {company} • {location}
          </p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full font-medium 
          ${status === "Interview" && "bg-yellow-100 text-yellow-700"}
          ${status === "Applied" && "bg-blue-100 text-blue-700"}
          ${status === "Offer" && "bg-green-100 text-green-700"}
          ${status === "Rejected" && "bg-red-100 text-red-700"}
        `}
        >
          {status}
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <p>Type: {type}</p>
        <p>{date}</p>
      </div>

      <div className="mt-4 flex gap-3">
        <Link
          to={`/edit/${_id}`}
          className="text-indigo-600 hover:underline text-sm"
        >
          Edit
        </Link>
        <button
          className="text-red-500 hover:underline text-sm"
          onClick={() => deleteJob(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
