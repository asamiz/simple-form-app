import React from "react";
import DataSection from "./DataSection";
import "./Styles/SimpleForm.css";

export default class SimpleForm extends React.Component {
  state = {
    tableRows: [],
    incrementer: 0,
    textValue: "",
    dropDownValue: "select.."
  };
  render() {
    return (
      // The basic structure of the form before adding the rows that should be with the "decrease" button
      <div>
        <table className="form-table">
          <thead>
            <tr>
              <td>Text Input</td>
              <td>Drop Down</td>
              <td>Add/Remove Button</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Enter any value ..."
                  onChange={e => this.setState({ textValue: e.target.value })}
                />
              </td>
              <td>
                <select
                  onChange={e =>
                    this.setState({
                      dropDownValue: e.target.value
                    })
                  }
                  defaultValue={"Pick a choice .."}
                >
                  <option value="Pick a choice .." disabled>
                    Pick a choice ..
                  </option>
                  <option value="React">React</option>
                  <option value="React-Native">React-Native</option>
                  <option value="NodeJs">NodeJs</option>
                  <option value="MongoDB">MongoDB</option>
                </select>
              </td>
              <td>
                <input
                  type="button"
                  value="+"
                  id="addBtn"
                  onClick={() =>
                    this.setState({
                      tableRows: [
                        ...this.state.tableRows,
                        ++this.state.incrementer
                      ]
                    })
                  }
                />
              </td>
            </tr>

            {/* ----- Decreasing Row Section --------- */}
            {this.state.tableRows.map(r => (
              <tr key={r}>
                <td>
                  <input
                    type="text"
                    placeholder="Enter any value ..."
                    onChange={e => this.setState({ textValue: e.target.value })}
                  />
                </td>
                <td>
                  <select
                    onChange={e =>
                      this.setState({
                        dropDownValue: e.target.value
                      })
                    }
                    defaultValue={"Pick a choice .."}
                  >
                    <option value="Pick a choice .." disabled>
                      Pick a choice ..
                    </option>
                    <option value="React">React</option>
                    <option value="React-Native">React-Native</option>
                    <option value="NodeJs">NodeJs</option>
                    <option value="MongoDB">MongoDB</option>
                  </select>
                </td>
                <td>
                  <input
                    type="button"
                    value="-"
                    id="rmBtn"
                    onClick={() =>
                      this.setState({
                        tableRows: this.state.tableRows.filter(
                          rowNum => rowNum !== r
                        )
                      })
                    }
                  />
                </td>
              </tr>
            ))}

            {/* -------- DataBinding Section -------- */}
            <DataSection
              textValue={this.state.textValue}
              dropDownValue={this.state.dropDownValue}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
