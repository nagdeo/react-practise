import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/product.css';
class product extends Component {
    render() {
        return (
            <div align="center">
                <h1>Product Component</h1>
                <Link to="/product/fruits" ><button className="btnProducts">Fruits</button></Link>
                <Link to="/product/vegetables"><button className="btnProducts">Vegetables</button></Link>
                <Link to="/product/essentials"><button className="btnProducts">Essentials</button></Link>

            </div>
        );
    }
}

export default product;