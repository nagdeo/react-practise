import React, { Component,createRef } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.unameRef=createRef()
        this.password=createRef()
    }
    submitHandler = (e)=>{
        e.preventDefault();
        alert(this.unameRef.current.value + "Login Successful...")
    }
    render() {
        return (
            <div style={{marginLeft:"150px"}}>
                 <h1>Login Component</h1>
                 <form onSubmit={this.submitHandler}>
                      <input type="text" placeholder="abc@abc.com" ref="unameRef"/><br/>
                      <input type="password" ref="pass"/><br/>
                      <input type="submit"/><br/>
                      <br/>
                      <br/>

                 </form>
            </div>
        );
    }
}

export default Login;