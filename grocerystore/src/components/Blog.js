import React, { Component } from 'react';
import axios from 'axios'
class Blog extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
        
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>this.setState({data:response.data}))
        .catch((err)=>console.log(err));
    }
    render() {
        if(this.state.data[0]===undefined){
            return <div>Loading...</div>
        }
        let posts=this.state.data.map(post=>
             <div key={post.id}>
                  <hr/>
                  <p>{post.userId} - {post.title}</p>
                  <p>{post.body}</p>
             </div>
            )
        return (
            <div>
                <h4 style={{align:"center"}}></h4>
                {posts}
            </div>
        );
    }
}

export default Blog;