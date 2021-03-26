import React, { Component } from 'react';
import {incrementAction} from '../redux/config'
import {connect} from 'react-redux';

class counter extends Component {
    render() {
        return (
            <div align="center">
                <h1>Counter Component</h1>
                <p>Counter: {this.props.counter}</p>
                <button onClick={this.props.increment}>Increment</button>
            </div>
        );
    }
}
function mapStateToProps(state){
  return {counter:state.counter}
}
function mapDispatchToProps(dispatch){
    return {
        increment:()=>
        dispatch(incrementAction)
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(counter);