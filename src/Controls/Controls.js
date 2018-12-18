import React, {Component} from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: ''
    }
  }

  updateCardName = (event) => {
    this.setState({ cardName: event.target.value })
  }

  addCardToList = (event) => {
    event.preventDefault();
    this.props.addCardToList(this.state.cardName)
  }

  render() {
    return(
      <form>
        <input type="text" onChange={this.updateCardName} className="controls--input"></input>
        <button onClick={this.addCardToList} className="controls--button">Click to add card</button>
      </form>
    )
  }
}

export default Controls;