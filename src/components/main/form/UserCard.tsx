import React, { Component } from 'react'
import './UserCard.css'


class UserCard extends Component {
  state = {
    cards: [],
  }

  addCard(card) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }))
  }

  componentDidMount() {
    const userData = localStorage.getItem('user-form')
    if (userData) {
      this.addCard(JSON.parse(userData))
    }
  }

  componentWillUnmount() {
    localStorage.setItem('user-form', '')
  }

  render() {
    const { cards } = this.state

    return (
      <div className="user-cards">
        {cards.map((card, index) => (
          <div 
            className="user-card"
            key={index}
          >
            <h2 className="user-card__name">{card.userName}</h2>
            <div className="user-card__image">
              <img className="user-card__file" src={card.userFile} alt="Uploaded file" />
            </div>
            <p className="user-card__email">Email: {card.userEmail}</p>
            <p className="user-card__date">Date of birth: {card.userDate}</p>
            <p className="user-card__select">Native language: {card.userSelect}</p>
            <p className="user-card__radio">card color: {card.userRadio ? 'Selected' : 'Not selected'}</p>
            <p className="user-card__checkbox">Consent given: {card.userCheckbox ? 'Checked' : 'Unchecked'}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default UserCard
