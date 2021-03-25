import React, { Component } from 'react';
import img from '../images/comp.jpg';
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import Reveiw from './Reveiw';
import Block from './Block';
import Recommendation from './Recommendation';
import Clock from './Clock';

class Product extends Component {
    constructor(){
        super();
     this.product_des='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.';
    this.price=100;
    this.review_rating=[1,2,3,4];
     this.quantity=0;
     this.reviews=[
         {name:'anu',rating:'4.5',comments:'recommended to buy'},
         {name:'Tanu',rating:'4.5',comments:'recommended to buy'},
         {name:'Manu',rating:'4.5',comments:'recommended to buy'}
     ]
    }
    handleClick(){
        alert("clicked");
    }
    changeBgColor(event){
        event.target.style.backgroundColor=event.target.id;
    } 
    changeBgColorHover(event){
           event.target.style.backgroundColor="yellow";
    }
    changeBgColorHoverL(event){
        event.target.style.backgroundColor="white";
 }
    render() {
        let prod_name="Earphone";
        return (
            <div>

                 <h1>Product Details</h1>
                 <div style={{display:"inline-block"}}>
                     <div style={{display:"inline-block"}}>
                          <img   style={{width:"10rem",height:"10rem"}} src={img}></img>
                     </div>
                     <div style={{display:"inline-block",textAlign:"left",marginLeft:"1rem",position:'relative'}}>
                           <p>{prod_name}</p>
                           <p>{this.product_des} </p>
                           <p>Price: {this.price * 0.1}</p>
                           <p>Review: {this.review_rating}</p>
                           <div>
                               <VscAdd style={{display:"inline-block"}}/>
                               <p style={{display:"inline-block",marginLeft:"10px"}}>{this.quantity}</p>
                               <VscChromeMinimize style={{display:"inline-block",marginLeft:"10px"}}/>
                           </div>
                           <div>
                               <button onClick={this.handleClick}
                               style={{ padding: "5px 16px",background: "blue",border: "1px solid blue",color: "white"}}>Buy Now</button>
                           </div>
                           <button onClick={this.changeBgColor} id="green">Green</button>
                           <button onClick={this.changeBgColor} id="blue">Blue</button>
                           <button onClick={this.changeBgColor} id="red">Red</button>
                           <ul>
                               <li onMouseEnter={this.changeBgColorHover} onMouseLeave={this.changeBgColorHoverL} id="morning">Morning slot</li>
                               <li onMouseEnter={this.changeBgColorHover} onMouseLeave={this.changeBgColorHoverL} id="afternoon">Afternoon slot</li>
                               <li onMouseEnter={this.changeBgColorHover} onMouseLeave={this.changeBgColorHoverL} id="evening">Evening slot</li>
                               <li onMouseEnter={this.changeBgColorHover} onMouseLeave={this.changeBgColorHoverL} id="late">Late Evening slot</li>
                           </ul>
                     </div>
                 </div>
                 <Reveiw data={this.reviews} vendor="hello string" membership="prime"/>
                 <Block/>
                 <Recommendation/>
                 <Clock/>
            </div>
          
        );
    }
}

export default Product;


