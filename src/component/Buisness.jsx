import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Buisness extends Component {
    render() {
        return (
            <div>
                <Link to="/"><button className="button1">Personal</button></Link>
                <Link to="/buisness"><button className="button2">Buisness</button></Link>
                <form>
                    <label >
                        <input type="text" placeholder="BuisnessName"/>
                    </label>
                    <br/>
                    <label>
                        <input type="text" placeholder="Email"/>
                    </label>
                    <br/>
                    <label >
                        <input type="text" placeholder="PhoneNumber"/>
                    </label>
                </form>
                <Link to="/next"><button className="button3">Next</button></Link>
            </div>
        )
    }
}