import React, { Component } from "react";
import CustomizedTables from "../Table/table";
import tableData1 from "../App/data1.json";
import tableData2 from "../App/data2.json";
import tableData3 from "../App/data3.json";
import tableData4 from "../App/data4.json";
import tableData5 from "../App/data5.json";
import tableData6 from "../App/data6.json";
import "./App.css";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="App_Heading">
          <h1>Compare Courses</h1>
        </div>
        <div className="dropdown dropdown_app">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Country
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              India
            </a>
            <a class="dropdown-item" href="#">
              Austrais
            </a>
            <a class="dropdown-item" href="#">
              Canada
            </a>
          </div>
        </div>
        <div className="dropdown dropdown_app">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Decipline
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Bachelor
            </a>
            <a class="dropdown-item" href="#">
              Masters
            </a>
            <a class="dropdown-item" href="#">
              Doctrate
            </a>
          </div>
        </div>
        <div className="dropdown dropdown_app">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Course
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Automobile Engineering
            </a>
            <a class="dropdown-item" href="#">
              Biochemical Engineering
            </a>
            <a class="dropdown-item" href="#">
              Chemical Engineering
            </a>
          </div>
        </div>
        <CustomizedTables tableData={tableData1} />

        <div className="app__table">
          <div className="Table_Heading">
            <h1>Courses</h1>
          </div>
          <CustomizedTables tableData={tableData2} />
        </div>
        <div className="app__table">
          <div className="Table_Heading">
            <h1>Erexian Admits</h1>
          </div>
          <CustomizedTables tableData={tableData3} />
        </div>
        <div className="app__table">
          <div className="Table_Heading">
            <h1>Test Requirements(English)</h1>
          </div>
          <CustomizedTables tableData={tableData4} />
        </div>
        <div className="app__table">
          <div className="Table_Heading">
            <h1>Test Requirements(Aptitude)</h1>
          </div>
          <CustomizedTables tableData={tableData5} />
        </div>
        <div className="app__table">
          <div className="Table_Heading">
            <h1>Key Dates 2021</h1>
          </div>
          <CustomizedTables tableData={tableData6} />
        </div>
        <div className="app__table">
          <div className="Table_Heading">
            <h1>Key Dates 2022</h1>
          </div>
          <CustomizedTables tableData={tableData6} />
        </div>
        <div className="app__table">
          <div className="Table_Heading">
            <h1>Key Dates 2023</h1>
          </div>
          <CustomizedTables tableData={tableData6} />
        </div>
      </div>
    );
  }
}
