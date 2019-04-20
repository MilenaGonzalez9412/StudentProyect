import React, { Component } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

export default class Student extends Component {
  static propTypes = {
    addStudent: PropTypes.func.isRequired
  };

  state = {
    validate: false,
    message: ""
  };

  //Se crean refs
  codeRef = React.createRef();
  namesRef = React.createRef();
  partialRef = React.createRef();
  finalRef = React.createRef();
  followingRef = React.createRef();
  definitiveRef = React.createRef();

  createStudent = event => {
    event.preventDefault();

    const code = this.codeRef.current.value;
    const names = this.namesRef.current.value;
    const partial = this.partialRef.current.value;
    const final = this.finalRef.current.value;
    const following = this.followingRef.current.value;
    const definitive = (partial * 0.25) + (final * 0.25) + (following * 0.5);
    const finalState = definitive >= 3 ? "Ganó" : "Perdió";

    // studentList.find(search => search.name == nam)
    if (partial >= 0 && partial <= 5) {
      if (final >= 0 && final <= 5) {
        if (following >= 0 && following <= 5) {
          const student = {
            code,
            names,
            partial,
            final,
            following,
            definitive,
            finalState
          };

          console.log(student);

          //TODO send
          let studentExist = this.props.students.filter(
            item => item.code === student.code
          );
          if (studentExist.length > 0) {
            this.setState({ validate: true });
            this.setState({ message: "El codigo ingresado ya existe." });
          } else {
            this.props.addStudent(student);
            event.currentTarget.reset();
            this.setState({ validate: false });
          }
        } else {
          this.setState({ validate: true });
          this.setState({
            message: "La nota del seguimiento debe ser entre 0 y 5"
          });
        }
      } else {
        this.setState({ validate: true });
        this.setState({ message: "La nota del final debe ser entre 0 y 5" });
      }
    } else {
      this.setState({ validate: true });
      this.setState({ message: "La nota del parcial debe ser entre 0 y 5" });
    }
  };

  calculateDefinitive(partial, final, following) {
    return (partial * 0.25) + (final * 0.25) + (following * 0.5);
  }

  changeDefinitive = () => {
    const partial = this.partialRef.current.value
        ? this.partialRef.current.value
        : 0,
      final = this.finalRef.current.value ? this.finalRef.current.value : 0,
      following = this.followingRef.current.value
        ? this.followingRef.current.value
        : 0;
    const definitive = this.calculateDefinitive(partial, final, following);
    this.definitiveRef.current.value = definitive;
  };

  render() {
    return (
      <div className="col-md-12 order-md-1">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Ingreso Estudiante</span>
        </h4>
        <form onSubmit={this.createStudent}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Código:
              </span>
            </div>
            <input
              ref={this.codeRef}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Código"
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Alumno:
              </span>
            </div>
            <input
              ref={this.namesRef}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Nombres y Apellidos"
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Parcial:
              </span>
            </div>
            <input
              ref={this.partialRef}
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.changeDefinitive}
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Final:
              </span>
            </div>
            <input
              ref={this.finalRef}
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.changeDefinitive}
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Seguimiento:
              </span>
            </div>
            <input
              ref={this.followingRef}
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.changeDefinitive}
            />
          </div>
          <hr className="mb-4" />

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Definitiva:
              </span>
            </div>
            <input
              ref={this.definitiveRef}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              disabled
            />
          </div>

          {this.state.validate && <Alert message={this.state.message} />}

          <hr className="mb-4" />
          <button
            className="btn btn-primary btn-lg btn-block bg-purple text-white lh-100"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
