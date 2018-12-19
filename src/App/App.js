import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Aside from '../Aside/Aside.js';
import CardArea from '../CardArea/CardArea.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      currentCard: {},
      decks: []
    };
  }
  
  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/cards')
      .then(cards => cards.json())
      .then(parsedCards => this.setState({ cards: parsedCards.cards }))
      .catch(err => console.log('cards error', err))
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/decks')
      .then(decks => decks.json())
      .then(parsedDecks => this.setState({ decks: parsedDecks.decks }))
      .catch(err => console.log('decks error', err))
  }

  retrieveCardName = (cardName) => {
    let currentCard = this.state.cards.find((card) => {
      return card.cardName === cardName;
    })
    this.setState({ currentCard })
  }
  render() {
    return (
      <div className="app">
        <Aside retrieveCardName={this.retrieveCardName} />
        <CardArea currentCard={this.state.currentCard}/>
      </div>
    )
  }
}

export default App;