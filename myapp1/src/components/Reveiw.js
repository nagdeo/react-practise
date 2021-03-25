import React, { Component } from 'react';

class Reveiw extends Component {
    render() {
        let tableRows=this.props.data.map(review=>
            <tr key={review.name}>
                <td>{review.name}</td>
                <td>{review.rating}</td>
                <td>{review.comments}</td>
            </tr>)
            let message='';
            if(this.props.membership==='prime'){
                message=<h3>You order will be delivered within 24 hours</h3>
            } else{
                message=<h3>You order will be delivered within 2-3 Business days</h3>
            }
        return (
            <div>
                <h4>Review for product</h4>
                <p>{JSON.stringify(this.props.data)}</p>
                <p>{this.props.vendor}</p>
                {message}
                <table border="2">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Comments</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Reveiw;