// import logo from './logo.svg';
import './App.css';
import Block from './components/Block';
import Product from './components/Product';
import React from "react";
import PageHeader from './components/PageHeader';
import ClockHook from './components/ClockHook';
import Employee from './components/Employee';
import EmployeesContext from './components/EmployeeContext';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
        <h1>React App</h1>
        <PageHeader/>
        <Block/>
        <ClockHook/>
        <Product/>
        <Employee/>
        <EmployeesContext/>
    </div>
  );
}

export default App;
