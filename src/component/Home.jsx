import React, { Component }  from 'react'
import {Link} from 'react-router-dom';
import './Home.css';
export default class Home extends Component {
      

    render(){
         return(
             <div className="outline">
<Link to="/"><button className="button1">Personal</button></Link>
<Link to="/"><button className="button2">Bussiness</button></Link>

<form className="form">

    <label>
        <input type="text" placeholder="FirstName"/>
    </label>
    <br></br>

    <label>
        <input type="text" placeholder="LastName"/>
    </label>
    <br></br>

    <label>
        <input type="text" placeholder="Email"/>
    </label>
    <br></br>

    <label>
        <input type="text" placeholder="Mobile"/>
    </label>
    
</form>
<Link to="/next"><button className="button3">Next</button></Link>





             </div>
         )
    }
}