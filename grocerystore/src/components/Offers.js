import React, { Component } from 'react';

import './css/offers.css';
let offers = require('../jsons/offers.json');

class Offers extends Component {
    render() {
        console.log(offers);
        let Offers=[];
        Offers=offers;
        let productDiv=Offers.map(offer =>
        
            <div className="card-div" key={offer.item} style={{display:"inline-block"}}>
                <div>
                    <img src={offer.img} style={{width:"16rem",height:"16rem"}}/>
                </div> 
                <div style={{padding:"1rem"}}>
                    <p>{offer.item}</p>
                
                    <p>Rs. {offer.price}</p>
                    <button className="btnOffers">Add To Cart</button>
                  
                </div>
            </div>
      
        )
        return (
            <div  style={{padding:"1rem"}}>
                  {productDiv}
            </div>
        );
    }
}

export default Offers;