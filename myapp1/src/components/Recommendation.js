import React, { Component } from 'react';


class Recommendation extends Component {
    constructor(){
        super();
        this.state={
            products:[
                {name:'ABD HEAD PHONES',price:10000,inStock:20},
                {name:'XYZ HEAD PHONES',price:8000,inStock:30},
            ]
        }
        
    }
    changeStock =(event) =>{
        console.log(event.target.id)
        let temp=this.state.products;
        let index=temp.findIndex(product=>product.name===event.target.id)
        temp[index].inStock--;
        this.setState({
            products:temp
        })
     }
     seeProduct(product){
       console.log(product);
     }
    
    render() {
        let productDiv=this.state.products.map(product=>
            <div style={{border:"1px solid blue",width:"300px",display:"inline-block",marginBottom:"1rem",
             padding:'10px',textAlign:'left'}} key={product.name}>
                <p>Product: {product.name}</p>
                <p>Rating: {product.price}</p>
                <p>InStock: {product.inStock}</p>
                <button onClick={this.changeStock} id={product.name}>Add to Cart</button>
                <button onClick={()=>this.seeProduct(product)} id={product.name}>See</button>
            </div>)
        return (
            <div>
                 {productDiv}
            </div>
        );
    }
}

export default Recommendation;