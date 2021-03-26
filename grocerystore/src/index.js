import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home';
import logo from './images/logo.jpg';
import Offers from './components/Offers';
import product from './components/product';
import Fruits from './components/Fruits';
import Vegetable from './components/Vegetable';
import Essentials from './components/Essentials';
import StoreLocator from './components/StoreLocator';
import Address from './components/Address';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
// import HtmlPlayGround from './components/HtmlPlayGround';
// import Login from './components/Login';
import {Provider} from 'react-redux';
import {store } from './redux/config'
import counter from './components/counter';
import CoursesPage from './components/CoursePage';
const HtmlPlayGround = React.lazy(()=>import('./components/HtmlPlayGround.js'));
const Login = React.lazy(()=>import('./components/Login.js'));

const MyHeader=()=><div style={{backgroundColor:'blue',color:'white'}}>
  <img style={{margin:"20px"}} src={logo} alt="logo" width="100" height="100" />
  <h1 style={{display:"inline-block",verticalAlign:"top"}}>Galaxy GroceryStore</h1>
</div>

const MyFooter=()=><footer align="center" style={{backgroundColor:'blue',color:'white'}}>
  Copyrights @2020 &copy; .All rights reserved at Galaxy GroceryStore 
</footer>

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <MyHeader/>
    <div>
      <Route path="" component={App}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/offers" component={Offers}></Route>
      <Route path="/product" component={product}></Route>
      <Route path="/product/fruits" component={Fruits}></Route>
      <Route path="/product/vegetables" component={Vegetable}></Route>
      <Route path="/product/essentials" component={Essentials}></Route>
      <Route path="/storelocator" component={StoreLocator}></Route>
      <Route path="/storelocator/:city" component={Address}></Route>
      <Route path="/blog" component={Blog}></Route>
      <Route path="/contact-us" component={ContactUs}></Route>
      <Suspense fallback={<div>Loading..</div>}>
      <Route path="/html-playground" component={HtmlPlayGround}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/counter" component={counter}></Route>
      <Route path="/course-add" component={CoursesPage}></Route>
      </Suspense>
    </div>
    <MyFooter/>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
