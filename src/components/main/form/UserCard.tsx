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
            <h2 className="user-card__name">{card.name}</h2>
            <div className="user-card__image">
              <img className="user-card__file" src={card.file} alt="Uploaded file" />
            </div>
            <p className="user-card__email">Email: {card.email}</p>
            <p className="user-card__date">Date of birth: {card.date}</p>
            <p className="user-card__select">Native language: {card.select}</p>
            <p className="user-card__radio">card color: {card.radio ? 'Selected' : 'Not selected'}</p>
            <p className="user-card__checkbox">Consent given: {card.checkbox ? 'Checked' : 'Unchecked'}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default UserCard