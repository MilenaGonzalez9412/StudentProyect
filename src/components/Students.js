import React from "react";
import PropTypes from "prop-types";

export default function Students({ students }) {
  console.log(students);
  return (
    <div className="">
  <hr/>
      <h6>Listado</h6>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Alumno</th>
            <th scope="col">Nota</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td>{student.names}</td>
              <td>{student.definitive}</td>
              <td>{student.finalState}</td>
            </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  );
}

Students.propType = {
  students: PropTypes.object
};
