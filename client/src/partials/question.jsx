import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      studied: false,
      id: this.props.question.id
    }
    // this.editCard = this.editCard.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  // editCard(input) {
  //   console.log('editting');
  //   const quizId = this.props.question.quiz_id
  //   const jwt = localStorage.getItem("jwt");
  //   const body = {"question":{"q_value": input.q_value, "a_value": input.a_value, "quiz_id": quizId}};
  //   const init = {
  //     method: 'PUT',
  //     headers: {"Authorization": `Bearer ${jwt}`}
  //   }
  //   console.log(init);
  //   fetch(`${BASE_URL}/api/questions/${this.props.key}`, init)
  //   .then(res => res.json())
  //   .catch(err => err);
  // }
  handleDelete() {
    this.props.doDelete(this.state.id)
  }

  render() {
    return (
      <div>
        <p>Question: {this.props.question.q_value}</p>
        <p>Answer: {this.props.question.a_value}</p>
        <button onClick={this.editCard}>Edit Me!</button>
        <button onClick={this.handleDelete}>Delete Me!</button>
      </div>
    );
  }
}

export default Question;
