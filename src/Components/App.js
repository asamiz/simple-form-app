import React from "react";
import "../Components/Styles/App.css";
import SimpleForm from "./SimpleForm";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="form-header">Simple Form</h1>
        <hr />
        <SimpleForm />
      </div>
    );
  }
}
