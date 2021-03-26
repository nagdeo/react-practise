import React, { Component } from 'react';

class Address extends Component {
    storeAddresses = {
        'Bengaluru': {
            address: 'no.3,3rd cross,Jayanagar 8th block Bengaluru-41',
            contact: 987654321,
            email: 'blr@galaxystore.com'
        },
        'Chennai': {
            address: ' Near Pothis, T Nagar,Chennai -67',
            contact: 765432190,
            email: 'chnblr@galaxystore.com'
        },
        'Delhi': {
            address: '19, Ansari Rd, Daryaganj, New Delhi, Delhi 110002',
            contact: 123283333,
            email: 'dlh@galaxystore.com'
        },
        'Hyderabad': {
            address: 'Sigma Mall,Hypercity, Hyderbad-66',
            contact: 6789054278,
            email: 'hyd@galaxystore.com'
        },
        'Mumbai': {
            address: '45, Ground Floor, Flora Fountain Somaiya Bhavan, 47, Mahatma Gandhi Road, Fort, Mumbai, Maharashtra 400001',
            contact: 976543219,
            email: 'mum@galaxystore.com'
        }
    }
    render() {
        let saddress = this.storeAddresses[this.props.match.params.city]
        return (
            <div style={{ display: "inline-block", width: "400px", marginLeft: "30px", padding: "20px" }}>
                <h1>{this.props.match.params.city} Store Address :</h1>
                <p>Address : {saddress.address}</p>
                <p>Contact No:{saddress.contact}</p>
                <p>Email : {saddress.email}</p>
            </div>
        )
    }
}

export default Address;