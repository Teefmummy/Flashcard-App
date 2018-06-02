import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <div className="nav-container-obj"><Link to="/profile">Profile</Link></div>
          <div className="nav-container-obj"><Link to="/quiz">Quizzes</Link></div>
        </div>
      </div>
    );
  }
}

export default Nav;
