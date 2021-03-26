import React, { Component } from 'react';

class Vegetable extends Component {
    constructor(){
        super();
        this.state={
            list:[
                {img:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dc9530c2-2669-4fbc-9c43-6424e743c940_425x425.JPG',description:"Asparagus Green - Imported - 250 g",price:450},

                {img:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/23f0d27f-e39d-42bc-93a2-4bd2a8931950_425x425.jpg',description:"Asparagus White - Imported - 250 g",price:749.50},

                {img:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e7be59b3-1573-4e00-b462-a33d181e72ad_425x425.JPG',description:"Lettuce Iceberg - Exotic - 1 kg",price:150},

                {img:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/601d0e3f-5906-456e-80d6-0c411b18c9ea_425x425.jpg',description:"Cabbage Red - Exotic - 2 kg",price:289},
            ]

        }
    }
    
    render() {
        let contentBox=this.state.list.map(vegetable=> <div key={vegetable.description} style={{display:'inline-block',

        width:'270px',height:'350px',verticalAlign:'top',padding:"10px",border:'1px solid blue',margin:'10px'}}>

            <img src={vegetable.img} alt="fruit.description" width="200px" height="200px"/>

            <p>Name: {vegetable.description}</p>

            <p>Price: &#8377; {vegetable.price}</p>

            <button>Add to the Cart</button>

        </div>)
        
        return (
            <div>
                <h1>Vegetable Component</h1>
                {contentBox}
            </div>
        );
    }
}

export default Vegetable;