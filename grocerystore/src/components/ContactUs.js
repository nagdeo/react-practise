//Controlled Form
import React, { Component } from 'react';

class ContactUs extends Component {
    constructor(){
        super()
        this.state={
            name:'Mr RAM',
            email:'',
            feedback:''
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFeedback = this.handleFeedback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleName(e){
      this.setState({name:e.target.value})
    }
    handleEmail(e){
        this.setState({email:e.target.value})
      }
      handleFeedback(e){
        this.setState({feedback:e.target.value})
      }
      handleSubmit(e){
          e.preventDefault();
          alert(this.state.name +" Thank you for contacting us and We will get in touch with you on "+this.state.email)
      }
    render() {
        return (
            <div align="center">
                <p>I would love to hear on how you like/dislike IndiaBookStore.net. </p>
                  <p>  Mail me on feedback@galaxybookstore.net or submit this small form. </p>
                    <p>Ideas and suggestions are welcome</p>
                    <form onSubmit={this.handleSubmit} style={{border:'2px solid blue',width:"300px",margin:'30px',padding:"10px"}}>
                        <label>Your Name :</label>
                        <input type="text" 
                        value={this.state.name} onChange={this.handleName} /> <br/>
                        <label>Your Email :</label>
                        <input type="email" value={this.state.email} onChange={this.handleEmail}/><br/>
                        <label>Your Feedback :</label>
                        <textarea value={this.state.feedback} onChange={this.handleFeedback}></textarea> <br/>
                        <input type="submit" />
                    </form>
            </div>
        );
    }
}

export default ContactUs;