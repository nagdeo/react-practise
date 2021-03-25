import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Transpilers:convert from one language too other language
//compiler , interpreter: from source code to machine code
//class based component
class MyDiv extends Component{
  //returning ui using JSX
  render(){
    return (
      <div style={{textAlign:"center",backgroundColor:"lightblue"}}>
         <h2>Component header</h2>
         <p></p>
      </div>
    )
  }
}
//returning ui without JSX
class MyDiv2 extends React.Component {
  render() { //render will always return an UI
      return React.createElement('div', null, [
          React.createElement("h1",{},"Component Header"),
          React.createElement("p",{},"Component paragraph"),
          React.createElement("p",{},"Component paragraph2"),
          ]);
}
}

ReactDOM.render(<MyDiv/>,document.getElementById("app"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
