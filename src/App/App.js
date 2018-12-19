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
      decks: [],
      userCardList: []
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

  retrieveCardNames = (cardNames) => {
    let userCardList = this.state.cards.filter((card) => {
      return cardNames.includes(card.cardName);
    })
    this.setState({ userCardList })
  }
  render() {
    return (
      <div className="app">
        <Aside retrieveCardNames={this.retrieveCardNames} />
        <CardArea userCardList={this.state.userCardList}/>
      </div>
    )
  }
}

export default App;