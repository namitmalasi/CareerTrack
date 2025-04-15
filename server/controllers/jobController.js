import Job from "../models/Job.js";

// Create a job
export const createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, createdBy: req.user });
    res.status(201).json(job);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create job", error: err.message });
  }
};

// Get all jobs for the logged-in user
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.user }).sort({
      createdAt: -1,
    });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Failed to get jobs", error: err.message });
  }
};

// Update a job
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user },
      req.body,
      { new: true }
    );
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update job", error: err.message });
  }
};

// Delete a job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user,
    });
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete job", error: err.message });
  }
};
