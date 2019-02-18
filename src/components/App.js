import "../assets/css/App.css";
import React, { Component } from "react";
import Zoho from "zoho";

var invoice = new Zoho.Invoice({
  authtoken: "4df39abf5d3b434814bcadb0e79ebcf4"
});

console.log(invoice);
console.log("here");

invoice.getRecords("contacts", function(err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>

        <p>
          I hope you enjoy using basic-electron-react-boilerplate to start your
          dev off right!
        </p>
      </div>
    );
  }
}

export default App;
