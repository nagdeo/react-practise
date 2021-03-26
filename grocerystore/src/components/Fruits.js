import React, { Component } from 'react';

class Fruits extends Component {

    constructor(){
        super();
        this.state={
            list:[
                {img:"/assets/fruits/apple.jpg",description:"Apple",price:234},
                {img:"/assets/fruits/banana.jpg",description:"Banana",price:25},
                {img:"/assets/fruits/kiwi.jpg",description:"Kiwi",price:300},
                {img:"/assets/fruits/mango.jpg",description:"Mango",price:350},
                {img:"/assets/fruits/orange.jpg",description:"Orange",price:100},
                {img:"/assets/fruits/watermelon.jpg",description:"Watermelon",price:50},
            ]
        }
    }
    render() {
        let contentBox=this.state.list.map(fruit=> <div key={fruit.description} style={{display:'inline-block',

        width:'240px',height:'350px',verticalAlign:'top',padding:"10px",border:'1px solid blue',margin:'10px'}}>

            <img src={fruit.img} alt="fruit.description" width="200px" height="200px"/>

            <p>Name: {fruit.description}</p>

            <p>Price: &#8377; {fruit.price}</p>

            <button>Add to the Cart</button>

        </div>)
        return (
            <div style={{width:"90%",margin:"auto"}}>
                <h1>Fruits Component</h1>
                {contentBox}
            </div>
        );
    }
}

export default Fruits;
