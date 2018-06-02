import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      studied: false
    }
  }

  render() {
    return (
      <div>
        <p>Question: {this.props.question.q_value}</p>
        <p>Answer: {this.props.question.a_value}</p>
      </div>
    );
  }
}

export default Question;
