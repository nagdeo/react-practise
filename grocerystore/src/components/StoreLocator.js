import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class StoreLocator extends Component {
    render() {
        return (
            <div>
            <h1 align="center">Store Locator</h1>
            <div style={{display:"inline-block",border:"2px solid blue",borderRadius:"5px",width:"200px",marginLeft:"30px",padding:"20px"}}>
        <nav>
            <li><Link to="/storelocator/Bengaluru">Bengaluru</Link></li>
            <li><Link to="/storelocator/Chennai">Chennai</Link></li>
            <li><Link to="/storelocator/Mumbai">Mumbai</Link></li>
            <li><Link to="/storelocator/Hyderabad">Hyderabad</Link></li>
            <li><Link to="/storelocator/Delhi">Delhi</Link></li>
        </nav>
    </div>    
        </div>
        );
    }
}

export default StoreLocator;