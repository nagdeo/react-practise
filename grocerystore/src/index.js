import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home';
import logo from './images/logo.jpg';
import Offers from './components/Offers';

const MyHeader=()=><div style={{backgroundColor:'blue',color:'white'}}>
  <img style={{margin:"20px"}} src={logo} alt="logo" width="100" height="100" />
  <h1 style={{display:"inline-block",verticalAlign:"top"}}>Galaxy BookStore</h1>
</div>

const MyFooter=()=><footer align="center" style={{backgroundColor:'blue',color:'white'}}>
  Copyrights @2020 &copy; .All rights reserved at Galaxy BookStore 
</footer>

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <MyHeader/>
    <div>
      <Route path="" component={App}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/offers" component={Offers}></Route>
    </div>
    <MyFooter/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
