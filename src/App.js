import React from 'react';
import Home from './component/Home';
import './App.css';
import Buisness from './component/Buisness';
import Address from './component/Address';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import AccountDetails from './component/AccountDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/buisness">
            <Buisness></Buisness>
          </Route>
          <Route path='/next'>
            <AccountDetails></AccountDetails>
          </Route>
          <Route path='/address'>
            <Address></Address>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;