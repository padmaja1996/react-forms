import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Address extends Component {
    handleSubmit(event) {
        alert('Submission Successful!');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Link to="/address"><button className="button6">Address</button></Link>
                <form onSubmit={this.handleSubmit}>
                    <label >
                        <input type="text" placeholder="Country" />
                    </label>
                    <br></br>
                    <label>
                        <input type="text" placeholder="City" />
                    </label>
                    <br/>
                    <label >
                        <input type="text" placeholder="Pincode" />
                    </label>
                    <br/>
                    <label >
                        <input type="text" placeholder="Address" />
                    </label>
                    <br/>
                    <button value="Submit">Submit</button>
                </form>
                
            </div>
            
        )
    }
}