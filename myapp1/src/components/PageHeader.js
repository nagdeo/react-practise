import React, { Component } from 'react';
import header from '../images/header.jpg'

function PageHeader(props) {
   
        return (
            <div>
                 <img src={header}/>
                 <p style={{display:"inline-block"}}>My learning Portal</p>
            </div>
        );
    
}

export default PageHeader;