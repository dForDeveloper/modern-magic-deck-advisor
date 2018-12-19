import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() { 
    return(
        <article className='card--container'>
          <img className="card--image"
                src="https://img.scryfall.com/cards/large/en/gtc/240.jpg"
                alt=""/>
          <div className='counter--container'>
            <h1 className='card--counter'>1x</h1>   
          </div>
        </article>
      );
    }
  }
  
  export default Card; 