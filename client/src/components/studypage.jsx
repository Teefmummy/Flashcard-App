import React, { Component } from 'react';
import '../App.css';
// import Card from '../partials/card';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class StudyPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quiz: [],
      cardsLoaded: false
    }
    this.getDeckRelatedInformation = this.getDeckRelatedInformation.bind(this);
  }
  getDeckRelatedInformation() {
    const deckId = this.props.match.params.id;
    const jwt = localStorage.getItem("jwt")
    const init = {
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`${BASE_URL}/api/quizzes/${deckId}`, init)
    .then(res => res.json())
    .then(data =>
      this.setState({
        quiz: data,
        cardsLoaded: true
      }))
    .catch(err => err);
  }


  componentDidMount() {
    this.getDeckRelatedInformation()
  }

  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="study-page">
        <div className='study-page-container'>
          <h1>study Page</h1>
          <h2>{ this.state.cardsLoaded && this.state.quiz.name }</h2>
          <p>{this.state.quiz.description}</p>
          <ul>

          </ul>
        </div>
      </div>
    );
  }
}

export default StudyPage;
