

import React, { Component } from 'react';

class HtmlPlayGround extends Component {
    constructor(){
        super()
        this.state = {
            name: 'default',
           
          }
        this.handleName = this.handleName.bind(this);
    }
    // handleName(e){
    //     this.setState({name:e.target.value})
    //   }
    handleName(e){
        e.preventDefault();
        this.setState({name:e.target.value})
      }
    render() {
        return (
            <div align="center">
                 <p>Html Playground</p>
                       <form>
                           <textarea type="text" 
                              value={this.state.name} onChange={this.handleName} >
                                  </textarea> 
                       </form>
                        


                        <p style={{border:"1px solid black",width:"300px",height:"200px"}} dangerouslySetInnerHTML={{ __html: this.state.name }}></p>
            </div>
        );
    }
}

export default HtmlPlayGround; 