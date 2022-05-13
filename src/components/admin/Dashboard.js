import React from "react";

const Dashboard = () => {
  const orphans = JSON.parse(localStorage.getItem("orphans"));

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 40 }}>
        <span>Orphans</span>
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Phone number/email</th>
            <th scope="col">Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Hoxha</td>
            <td>0682354657</td>
            <td>Electrician</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ardit</td>
            <td>Muca</td>
            <td>0673498934</td>
            <td>Mechanics</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sajmir</td>
            <td>Logu</td>
            <td>0693474893</td>
            <td>Informatics, Marketing</td>
          </tr>

          {orphans?.map((orphan) => {
            return (
              <tr>
                <th scope="row">4</th>
                <td>{orphan.fName}</td>
                <td>{orphan.lName}</td>
                <td>{orphan.email}</td>
                <td>{orphan.skills}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
