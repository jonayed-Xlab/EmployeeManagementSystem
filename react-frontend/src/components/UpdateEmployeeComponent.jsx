import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }
  updateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, this.state.id).then((res)=>{
                this.props.history.push('/employees');
    });
  };
  cancel() {
    this.props.history.push("/employees");
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 card mt-3 col-md-3 ">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="">first name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="mt-1 mb-3 mx-2"
                      placeholder="enter your first name"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                    <label htmlFor="">last name</label>

                    <input
                      type="text"
                      className="mt-1 mb-3 mx-2"
                      name="lastname"
                      placeholder="enter your last name"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                    <label htmlFor="">email address</label>

                    <input
                      type="text"
                      name="emailId"
                      className="mt-1 mb-3 mx-2"
                      placeholder="enter your email address"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success mx-3"
                    onClick={this.updateEmployee}
                  >
                    Save
                  </button>

                  <button
                    className="btn btn-danger mx-3"
                    style={{ marginLeft: "10px" }}
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateEmployeeComponent;
