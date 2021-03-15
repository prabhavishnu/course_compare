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
      <div className="Compare_Full_Page">
        <div className="Top_section">
          <div className="App_Heading">
            <h1>Compare Courses</h1>
          </div>
          <div className="Input_Section">
            <div className="DataInput">
              <h4>Add Courses to Compare</h4>
              <div className="Data_List">
                <input
                  list="countries"
                  name="countries"
                  placeholder="Select Country"
                  className="Input_field"
                />
                <datalist id="countries">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[4][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Discipline"
                  name="Discipline"
                  placeholder="Select Discipline"
                  className="Input_field"
                />
                <datalist id="Discipline">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[5][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="course"
                  name="course"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="course">
                  {Array(tableData2.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData2.rows[1][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Campus"
                  name="Campus"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="Campus">
                  {Array(tableData1.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData1.rows[0][`col_${index + 2}`]} />
                    ))}
                </datalist>
              </div>
            </div>
            <div className="DataInput">
              <h4>Add Courses to Compare</h4>
              <div className="Data_List">
                <input
                  list="countries"
                  name="countries"
                  placeholder="Select Country"
                  className="Input_field"
                />
                <datalist id="countries">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[4][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Discipline"
                  name="Discipline"
                  placeholder="Select Discipline"
                  className="Input_field"
                />
                <datalist id="Discipline">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[5][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="course"
                  name="course"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="course">
                  {Array(tableData2.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData2.rows[1][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Campus"
                  name="Campus"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="Campus">
                  {Array(tableData1.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData1.rows[0][`col_${index + 2}`]} />
                    ))}
                </datalist>
              </div>
            </div>
            <div className="DataInput">
              <h4>Add Courses to Compare</h4>
              <div className="Data_List">
                <input
                  list="countries"
                  name="countries"
                  placeholder="Select Country"
                  className="Input_field"
                />
                <datalist id="countries">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[4][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Discipline"
                  name="Discipline"
                  placeholder="Select Discipline"
                  className="Input_field"
                />
                <datalist id="Discipline">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[5][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="course"
                  name="course"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="course">
                  {Array(tableData2.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData2.rows[1][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Campus"
                  name="Campus"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="Campus">
                  {Array(tableData1.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData1.rows[0][`col_${index + 2}`]} />
                    ))}
                </datalist>
              </div>
            </div>
            <div className="DataInput">
              <h4>Add Courses to Compare</h4>
              <div className="Data_List">
                <input
                  list="countries"
                  name="countries"
                  placeholder="Select Country"
                  className="Input_field"
                />
                <datalist id="countries">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[4][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Discipline"
                  name="Discipline"
                  placeholder="Select Discipline"
                  className="Input_field"
                />
                <datalist id="Discipline">
                  {Array(tableData6.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData6.rows[5][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="course"
                  name="course"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="course">
                  {Array(tableData2.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData2.rows[1][`col_${index + 2}`]} />
                    ))}
                </datalist>
                <input
                  list="Campus"
                  name="Campus"
                  placeholder="Select Course"
                  className="Input_field"
                />
                <datalist id="Campus">
                  {Array(tableData1.columns - 1)
                    .fill()
                    .map((array_element, index) => (
                      <option value={tableData1.rows[0][`col_${index + 2}`]} />
                    ))}
                </datalist>
              </div>
            </div>
          </div>
        </div>
        <div className="Second_half_page">
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
      </div>
    );
  }
}
