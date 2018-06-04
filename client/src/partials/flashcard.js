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
    this.handlestudyclick = this.handlestudyclick.bind(this);
  }

  handleClick() {
    this.setState({
      studied: !this.state.studied
    })
  }
handlestudyclick() {
  this.props.handleNext();
  this.setState({
    studied: !this.state.studied
  })
}
  render() {
    return (
     this.state.studied ?
      <div>
          <p>Answer: {this.props.question.a_value}</p>
          <button onClick={this.handlestudyclick}>Next Card</button>
      </div> :
      <div>
          <p>Question: {this.props.question.q_value}</p>
          <button onClick={this.handleClick}>Show me the answer</button>
      </div>
    );
  }
}

export default Flashcard;
