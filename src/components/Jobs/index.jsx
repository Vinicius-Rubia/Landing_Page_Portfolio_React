import CardJobs from "../CardJobs";

import "./index.scss";

const Jobs = () => {
  return (
    <section id="jobs">
      <div>
        <h2>
          My recent <span className="text-color">works</span>
        </h2>
      </div>
      <div className="filter-list">
        <ul>
          <li id="active">All</li>
          <li>UI</li>
          <li>UX</li>
          <li>Web Design</li>
        </ul>
      </div>
      <div>
        <CardJobs />
      </div>
    </section>
  );
};

export default Jobs;
