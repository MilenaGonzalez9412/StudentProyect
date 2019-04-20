import React from "react";

export default function StudentsFilter({ getStudents, getStudentsByCode }) {
  let stateFilter = "All";
const studentCodeRef = React.createRef();

  const filterState = () => {
    getStudents(stateFilter);
  };

  const filterByCode =()=>{
    const studentCode = studentCodeRef.current.value;
    getStudentsByCode(studentCode);
    
  }

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3">
          <input
          ref ={studentCodeRef}
            type="text"
            className="form-control"
            placeholder="Documento"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button onClick={filterByCode} className="btn btn-info" type="button" id="button-addon2">
              Buscar
            </button>
          </div>
        </div>

        <div className="row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              onChange={() => {
                stateFilter = "Win";
              }}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Ganaron
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
              onChange={() => {
                stateFilter = "Lose";
              }}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Perdieron
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
              onChange={() => {
                stateFilter = "All";
              }}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Todos
            </label>
          </div>
          <button onClick={filterState} type="button" className="btn btn-info">
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
}
