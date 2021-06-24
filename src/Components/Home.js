import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import { PersonHoc } from '../HocComponents/ContactHOC';
//import Contact from './Contact';
import Display from './Display'

 class Home extends Component {
    render() {
        return (
            <div>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My App</Link>
    <div  id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/display">Display</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='container'>
   <Route path="/contact" component={PersonHoc}></Route>
   <Route path="/display" component={Display}></Route>
</div>
            </Router>
            
            </div>
        )
    }
}

export default Home
