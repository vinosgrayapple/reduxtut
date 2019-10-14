import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { connect } from 'react-redux'
import "./styles.css";

function App() {
  return (
    <div className="App container-fluid">
      <form style={{margin:'20px'}}>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="surname"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="output">lorem </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
