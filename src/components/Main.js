import React, { Component } from "react";
import Header from "./Header";
import SearchStudent from "./SearchStudent";
import Registry from "./Registry";
import StudentsFilter from "./StudentsFilter";
import Students from "./Students";
import { API_URL, API_TYPE } from "../config";
import Axios from "axios";
import StudentName from "./StudentName";

class Main extends Component {
  componentDidMount() {
    this.getStudent();
  }

  getStudent = async studentID => {
    const URL = `${API_URL}/${API_TYPE}/${studentID}`;
    console.log(URL);
    await Axios.get(URL)
      .then(resp => this.setState({ studentNameAPI: resp.data.name }))
      .catch(error => console.log(error));
  };

  getStudents = stateFilter => {
    console.log(stateFilter);
    let studentsByFilter = [];
    switch (stateFilter) {
      case "Win":
        studentsByFilter = this.state.students.filter(
          student => student.finalState === "Ganó"
        );
        this.setState({ studentsByFilter });
        break;

      case "Lose":
        studentsByFilter = this.state.students.filter(
          student => student.finalState === "Perdió"
        );
        this.setState({ studentsByFilter });
        break;

      default:
        studentsByFilter = this.state.students;
        this.setState({ studentsByFilter });
    }
  };

  filterByCode = code => {
    let studentByCode = this.state.students.filter(
      item => item.code === code
    );
    this.setState({studentsByFilter: studentByCode})
  };

  state = {
    students: [],
    studentNameAPI: "",
    studentsByFilter: []
  };

  addStudent = student => {
    const students = [...this.state.students, student];
    this.setState({ students, studentsByFilter: students });
  };

  render() {
    return (
      <div className="container">
        <Header title="REACT WORKSHOP POLI " year={new Date().getFullYear()} />
        <div className="row">
          <div className="col-6">
            <SearchStudent getStudent={this.getStudent} />
          </div>
          <div className="col-6">
            <StudentName name={this.state.studentNameAPI} />
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-6">
            <Registry
              addStudent={this.addStudent}
              students={this.state.students}
            />
          </div>
          <div className="col-6">
            <div>
              <StudentsFilter
                getStudents={this.getStudents}
                getStudentsByCode={this.filterByCode}
              />
              <Students students={this.state.studentsByFilter} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
