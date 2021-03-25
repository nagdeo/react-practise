import React, { Component } from 'react';
import Reveiw from './Reveiw';

class Block extends Component {
    render() {
        let books=[
            {name:'Mastering Angular',rating:'4.5',comments:'Good'},
            {name:'Mastering React',rating:'4.5',comments:'Good'}
            
        ]
        return (
            <div>
                  <Reveiw data={books} vendor="hello string"/>
            </div>
        );
    }
}

export default Block;