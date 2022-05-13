import React from "react";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const jobs = JSON.parse(localStorage.getItem("jobs"));
  const nav = useNavigate();
  return (
    <div>
      <span className="goback" onClick={() => nav(-1)} style={{ padding: 20 }}>
        Go back
      </span>
      <h1 style={{ padding: 20, textAlign: "center" }}> List of jobs</h1>

      {!jobs?.length && <h3 style={{textAlign:'center', marginTop:50}}>No jobs at the moment :(</h3>}

      {jobs &&<table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Location</th>
            <th scope="col">Description</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {jobs?.map((job, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.desc}</td>
                <td>{job.salary}</td>
                <td>
                  <a
                    href={`mailto:orphan.jobs@gmail.com?subject=Applying for ${job.title}`}
                    className="btn btn-primary"
                  >
                    Apply
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>}
    </div>
  );
};

export default Jobs;
