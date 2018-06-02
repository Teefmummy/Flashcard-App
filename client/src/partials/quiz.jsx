import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inspected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      inspected: !this.state.inspected
    })
  }
  render() {
    return (
      <div className="quiz">
        <h1>{this.props.quiz.name}</h1>
        { this.state.inspected ? <p>{this.props.quiz.description}</p> : <div></div> }
        <button onClick={this.handleClick}>Details</button>
        <button><Link to={"/quiz/" + this.props.quiz.id}>Let's Study!</Link></button>
      </div>
    );
  }
}

export default Quiz;
