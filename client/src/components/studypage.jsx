import React, { Component } from 'react';
import '../App.css';
import Flashcard from '../partials/flashcard';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class StudyPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: [],
      cardsLoaded: false
    }
    this.getQuestions = this.getQuestions.bind(this);
    this.renderCard = this.renderCard.bind(this);
  }

  getQuestions() {
    const quizId = this.props.match.params.id;
    const jwt = localStorage.getItem("jwt");
    // const body = {"question":{"quiz_id": quizId}};
    // console.log(body);
    const init = {
      method: 'GET',
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    console.log(init);
    fetch(`${BASE_URL}/api/quizzes/${quizId}`, init)
    .then(res => res.json())
    .then(data =>
      this.setState({
        questions: data,
        cardsLoaded: true
      }))
    .catch(err => err);
  }
  componentDidMount() {
    this.getQuestions()
  }

  renderCard() {
    for (let i = 0; i < this.state.questions.length; i += 1) {
      return(<Flashcard question={this.state.questions[i]} handleNext={this.handleClick}/>)
    }

}



  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="study-page">
        <div className='study-page-container'>
          <h1>study Page</h1>
          <h2>hello</h2>
          <ul>
          { this.state.cardsLoaded ? <div>{ this.renderCard() }</div> : <div>No cards for studying!</div>}

          </ul>
        </div>
      </div>
    );
  }
}

export default StudyPage;
