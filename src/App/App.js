import React, { Component } from 'react';
import './App.css';
import Aside from '../Aside/Aside.js';
import CardArea from '../CardArea/CardArea.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      decks: [],
      userCardsData: [],
      userDecks: []
    };
  }
  
  compareBuilds = () => {
    let [...newUserDecks] = this.state.userDecks;
    let userDeckNames = newUserDecks.map(deck => deck.deckName);
    this.state.userCardsData.forEach(card => {
      this.state.decks.filter(deck => {
        return deck.cards.includes(card.cardName)
      }).forEach(deck => {
        if (!userDeckNames.includes(deck.deckName)){
          newUserDecks.push(deck)
          userDeckNames.push(deck.deckName)
        }
      })
    })
    this.setState({ userDecks: newUserDecks });
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

  initializeCardCount = (userCardsData) => {
    userCardsData.forEach(card => {
      if (card.cardCount === undefined) {
        card.cardCount = 1
      }
    })
    this.setState({ userCardsData })
  }
  
  retrieveCardNames = (cardNames) => {
    let userCardsData = this.state.cards.filter((card) => {
      return cardNames.includes(card.cardName);
    })
    this.initializeCardCount(userCardsData);
  }

  setCardCount = (newUserCardsData) => {
    this.setState({ userCardsData: newUserCardsData })
  }

  updateImageCardCount = (cardCount) => {
    
  }

  render() {
    return (
      <div className="app">
        <Aside retrieveCardNames={this.retrieveCardNames}
                setCardCount={this.setCardCount}
                userCardsData={this.state.userCardsData}
                cards={this.state.cards}
                compareBuilds={this.compareBuilds} />
        <CardArea userCardsData={this.state.userCardsData}/>
      </div>
    )
  }
}

export default App;