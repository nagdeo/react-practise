import React, { Component } from 'react';

class Clock extends Component {
    constructor(){
        super();
        this.state={date:new Date()}
    }
    componentDidMount(){
        this.timerId= setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date:new Date
        })
    }
    render() {
        return (
            <div>
                <p>It is {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;