import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
            <Route
                path="/view/:id"
                component={ViewEmployeeComponent}
              ></Route>
              <Route
                path="/add/:id"
                component={CreateEmployeeComponent}
              ></Route>
              {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
              <Route
                path="/employees"
                component={ListEmployeeComponent}
              ></Route>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
