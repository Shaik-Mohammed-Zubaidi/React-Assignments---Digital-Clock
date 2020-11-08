import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.tid = 0;
    this.state = {
      timehr: 0,
      timemin: 0,
      timesec: 0
    };
  }
  componentDidMount() {
    var date = new Date();
    this.setState({
      timehr: date.getHours(),
      timemin: date.getMinutes(),
      timesec: date.getSeconds()
    });
    this.tid = setInterval(() => {
      var date = new Date();
      this.setState({
        timehr: date.getHours(),
        timemin: date.getMinutes(),
        timesec: date.getSeconds()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.tid);
  }

  render() {
    return (
      <div className="Clock">
        <h3 id="time">
          {this.state.timehr > 12 ? this.state.timehr - 12 : this.state.timehr}
          :{this.state.timemin}:
          {this.state.timesec < 10
            ? "0" + this.state.timesec
            : this.state.timesec}{" "}
          {this.state.timehr > 12 ? "PM" : "AM"}
        </h3>
      </div>
    );
  }
}

export default App;
