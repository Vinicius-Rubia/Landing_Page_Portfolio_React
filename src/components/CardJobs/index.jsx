import Job1 from "../../img/job_1.png";
import Job2 from "../../img/job_2.png";
import Job3 from "../../img/job_3.png";

import "./index.scss";

const jobs = [
  { id: 1, picture: Job1 },
  { id: 2, picture: Job2 },
  { id: 3, picture: Job3 },
];

const CardJobs = () => {
  return (
    <div id="jobs-card">
      {jobs.map((job) => (
        <img className="job" src={job.picture} alt="Job" key={job.id} />
      ))}
    </div>
  );
};

export default CardJobs;
