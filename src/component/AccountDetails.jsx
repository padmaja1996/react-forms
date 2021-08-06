/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import CountryDetails from './CountryDetails.json';
import {Link} from 'react-router-dom';
import './Home.css';

export default class AccountDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[...CountryDetails],
            currency:''
        }
        this.handleChange=this.handleChange.bind(this);
    };
    
    handleChange(event){
        this.state.data.map((data) => {
            if(data.country === event.target.value){
                 return this.setState({currency:data.currency});
            }
        });
    }

    render() {
        return (
            <div>
                <Link to="/next"><button className="button4">Bank Details</button></Link>
                <form>
                <label>
                Country:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="United States">United States</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="Russia">Russia</option>
                    <option value="South Africa">South Africa</option>
                </select>
                </label>
                <br/>
                <label>
                Currency:
                <input text="type" value={this.state.currency}/>
                </label>
                <br/>
                <label>
                Account Number:
                <input text="type"/>
                </label>
                <br/>
                <label>
                ACH Routing Number:
                <input text="type"/>
                </label>
                <br/>
                </form>
                <Link to="/address"><button className="button5">Next</button></Link>
            </div>
        )
    }
}