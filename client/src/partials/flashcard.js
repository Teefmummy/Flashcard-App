import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      studied: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      studied: true
    })
  }
  render() {
    return (
     this.state.studied ?
      <div>
          <p>Answer: {this.props.question.a_value}</p>
          <button onClick={this.props.handleNext}>Edit Me!</button>
      </div> :
      <div>
          <p>Question: {this.props.question.q_value}</p>
          <button onClick={this.handleClick}>Edit Me!</button>
      </div>
    );
  }
}

export default Flashcard;
