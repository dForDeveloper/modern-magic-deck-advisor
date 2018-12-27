import React, { Component } from 'react';
import './App.css';
import Aside from '../Aside/Aside.js';
import CardArea from '../CardArea/CardArea.js';

class App extends Component {
  constructor() {
    super();
    let storedUserCards = [];
    let storedFaveDecks = [{ deckName: "Bant Spirits" }, { deckName: "Izzet Phoenix" }, { deckName: "Death's Shadow" }];
    if (localStorage.getItem('userCardsData')) {
      storedUserCards = JSON.parse(localStorage.getItem('userCardsData'));
    }
    if (localStorage.getItem('userFaveDecks')) {
      storedFaveDecks = JSON.parse(localStorage.getItem('userFaveDecks'));
    }
    this.state = {
      asideView: 'myCardList',
      cardAreaView: 'myCardList',
      cards: [],
      decks: [],
      userCardsData: storedUserCards,
      userDecks: [],
      userFaveDecks: storedFaveDecks
    };
  }
  
  compareBuilds = () => {
    const newUserDecks = [];
    const userDeckNames = [];
    this.state.userCardsData.forEach(card => {
      this.state.decks.filter(deck => {
        return deck.cards.includes(card.cardName)
      }).forEach(deck => {
        if (!userDeckNames.includes(deck.deckName)){
          newUserDecks.push(deck)
          userDeckNames.push(deck.deckName)
        }
      })
    });
    this.setDeckPrices(newUserDecks);
  }

  setDeckPrices(userDecks) {
    const newUserDecks = userDecks.map(deck => {
      deck.price = 0;
      Object.keys(deck.cardCounts).forEach(cardInDeck => {
        const cardPrice = this.state.cards.find(card => {
          return card.cardName === cardInDeck;
        }).price;
        const userCard = this.state.userCardsData.find(card => {
          return card.cardName === cardInDeck
        });
        if (userCard) {
          const priceMultiplier = Math.max(0, (deck.cardCounts[cardInDeck] - userCard.cardCount))
          deck.price += cardPrice * priceMultiplier;
        } else {
          deck.price += cardPrice * deck.cardCounts[cardInDeck];
        }
      });
      deck.price = deck.price.toFixed(2);
      return deck;
    });
    this.setState({
      userDecks: newUserDecks,
      cardAreaView: 'compareDecks'
    });
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

  addUserCard = (cardName) => {
    const newCard = this.state.cards.find(card => {
      return cardName === card.cardName;
    });
    newCard.cardCount = 1;
    const newUserCardsData = this.state.userCardsData.concat([newCard]);
    this.setCardCount(newUserCardsData);
  }

  removeUserCard = (indexToRemove) => {
    const [...newUserCardsData] = this.state.userCardsData;
    newUserCardsData.splice(indexToRemove, 1)
    this.setCardCount(newUserCardsData);
  }

  setCardCount = (newUserCardsData) => {
    this.setState({ userCardsData: newUserCardsData },
      localStorage.setItem('userCardsData', JSON.stringify(newUserCardsData)));
  }

  setAsideView = (view) => {
    this.setState({ asideView: view })
  }

  removeFaveListItem = (indexToRemove) => {
    const [...newFaveDecks] = this.state.userFaveDecks;
    newFaveDecks.splice(indexToRemove, 1)
    this.setState({ userFaveDecks: newFaveDecks },
      localStorage.setItem('userFaveDecks', JSON.stringify(newFaveDecks)));
  }

  render() {
    return (
      <div className="app">
        <Aside
          addUserCard={this.addUserCard}
          removeUserCard={this.removeUserCard}
          setCardCount={this.setCardCount}
          userCardsData={this.state.userCardsData}
          cards={this.state.cards}
          compareBuilds={this.compareBuilds}
          asideView={this.state.asideView}
          userFaveDecks={this.state.userFaveDecks}
          removeFaveListItem={this.removeFaveListItem} />
        <CardArea
          userCardsData={this.state.userCardsData}
          setAsideView={this.setAsideView}
          cardAreaView={this.state.cardAreaView}
          userDecks={this.state.userDecks} />
      </div>
    )
  }
}

export default App;