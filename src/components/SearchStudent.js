import React from "react";

export default function SearchStudent({getStudent}) {

    const studentIDRef = React.createRef();

    const sendStudentID =()=>{
        const studentID = studentIDRef.current.value;
        getStudent(studentID);
    }

  return (
    <div className="col">
     <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Nombre Estudiante API</span>
        </h4>
      <div className="input-group mb-3">
        <input
        ref={studentIDRef}
          type="text"
          className="form-control"
          placeholder="Documento"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-info"
            type="button"
            id="button-addon2"
            onClick={sendStudentID}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
