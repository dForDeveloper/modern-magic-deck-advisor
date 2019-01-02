import React, { Component } from 'react';
import '../styles/main.scss';
import Aside from '../Aside/Aside.js';
import CardArea from '../CardArea/CardArea.js';

class App extends Component {
  constructor() {
    super();
    let storedUserCards = [];
    let storedFaveDecks = [];
    let storedWishList = [];
    if (localStorage.getItem('userCardsData')) {
      storedUserCards = JSON.parse(localStorage.getItem('userCardsData'));
    }
    if (localStorage.getItem('faveDecks')) {
      storedFaveDecks = JSON.parse(localStorage.getItem('faveDecks'));
    }
    if (localStorage.getItem('wishList')) {
      storedWishList = JSON.parse(localStorage.getItem('wishList'));
    }
    this.state = {
      asideView: 'myCardList',
      cardAreaView: 'myCardList',
      cards: [],
      decks: [],
      userDecks: [],
      userCardsData: storedUserCards,
      faveDecks: storedFaveDecks,
      wishList: storedWishList
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

  getExpandedDeckInfo = (deck) => {
    return this.state.cards.filter(card => {
      return deck.cards.includes(card.cardName);
    });
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/cards')
      .then(cards => cards.json())
      .then(parsedCards => this.getCurrentPrices(parsedCards.cards))
      .catch(err => console.log('cards error', err))
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/decks')
      .then(decks => decks.json())
      .then(parsedDecks => this.setState({ decks: parsedDecks.decks }))
      .catch(err => console.log('decks error', err))
  }

  getCurrentPrices = (cards) => {
    const timeOfCache = JSON.parse(localStorage.getItem('timeOfCache'))
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (!timeOfCache || Date.now() - timeOfCache > twentyFourHours) {
      const url = this.getURLArray(cards);
      Promise.all(this.getPricePromises(url))
        .then(priceData => {
          this.storePriceData(priceData);
          this.setCurrentPrices(cards);
        })
        .catch(err => console.log('Promise.all error', err));
    } else {
      this.setCurrentPrices(cards);
    }
  }

  getURLArray = (cards) => {
    return cards.map(card => {
      return `%21"${card.cardName.replace(/\s/g, '+')}"`;
    });
  }

  getPricePromises = (url) => {
    const promises = [];
    const root = 'https://api.scryfall.com/cards/search?q=f%3Am+unique%3Acards+%28';
    for (let i = 0; i < Math.ceil(url.length / 40); i++) {
      const index = 40 * i;
      promises.push(fetch(root + url.slice(index, index + 40).join('+or+') + '%29')
      .then(response => response.json())
      .then(response => response.data)
      .catch(err => console.log('price promise error', err)));
    }
    return promises;
  }

  storePriceData = (priceData) => {
    const totalPriceData = [].concat(...priceData);
    const cardPrices = totalPriceData.map(card => {
      return { cardName: card.name, price: card.usd };
    });
    localStorage.setItem('timeOfCache', JSON.stringify(Date.now()));
    localStorage.setItem('cardPrices', JSON.stringify(cardPrices));
  }

  setCurrentPrices = (cards) => {
    const newCards = cards.map(card => {
      const apiCard = JSON.parse(localStorage.getItem('cardPrices'))
        .find(pricedCard => pricedCard.cardName.includes(card.cardName))
      if (apiCard.price) {
        card.price = parseFloat(apiCard.price);
      }
      return card;
    });
    this.setState({ cards: newCards });
  }

  addUserCard = (cardName) => {
    const newCard = this.state.cards.find(card => {
      return cardName === card.cardName;
    });
    newCard.cardCount = 1;
    const newUserCardsData = this.state.userCardsData.concat([newCard]);
    newUserCardsData.sort(this.sortCardsByName);
    this.saveArray('userCardsData', newUserCardsData);
  }

  sortCardsByName = (card1, card2) => {
    if (card1.cardName < card2.cardName) {
      return -1;
    } else {
      return 1;
    }
  }

  saveArray = (arrayName, arrayToSave) => {
    this.setState({ [arrayName]: arrayToSave },
      localStorage.setItem(arrayName, JSON.stringify(arrayToSave)));
  }

  setAsideView = (view) => {
    this.setState({ asideView: view })
  }

  setCardAreaView = (view) => {
    this.setState( {cardAreaView: view})
  }


  addToWishlist = (card) => {
    const duplicate = this.state.wishList.find(wishlistCard => {
      return wishlistCard.cardName === card.cardName;
    });
    if (!duplicate) {
      card.wishListCount = 1;
      const newWishList = this.state.wishList.concat([card]);
      newWishList.sort(this.sortCardsByName);
      this.saveArray('wishList', newWishList);
    }
  }

  addToFaveDecks = (deck) => {
    const duplicate = this.state.faveDecks.find(faveDeck => {
      return faveDeck.deckName === deck.deckName;
    });
    if (!duplicate) {
      const newFaveDecks = this.state.faveDecks.concat([deck]);
      newFaveDecks.sort((a, b) => {
        return a.deckName < b.deckName ? -1 : 1;
      });
      this.saveArray('faveDecks', newFaveDecks);
    }
  }

  render() {
    return (
      <div className="app">
        <Aside
          addUserCard={this.addUserCard}
          userCardsData={this.state.userCardsData}
          cards={this.state.cards}
          compareBuilds={this.compareBuilds}
          asideView={this.state.asideView}
          faveDecks={this.state.faveDecks}
          wishList={this.state.wishList}
          saveArray={this.saveArray}/>
        <CardArea
          userCardsData={this.state.userCardsData}
          faveDecks={this.state.faveDecks}
          setAsideView={this.setAsideView}
          cardAreaView={this.state.cardAreaView}
          setCardAreaView={this.setCardAreaView}
          userDecks={this.state.userDecks}
          getExpandedDeckInfo={this.getExpandedDeckInfo}
          addToWishlist={this.addToWishlist}
          addToFaveDecks={this.addToFaveDecks}
          wishList={this.state.wishList}
          cards={this.state.cards}/>
      </div>
    )
  }
}

export default App;