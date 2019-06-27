import React from "react";

export default class DataSection extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.textValue}</td>
        <td>{this.props.dropDownValue}</td>
        <td />
      </tr>
    );
  }
}
