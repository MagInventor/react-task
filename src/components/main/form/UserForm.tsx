import React, { Component } from 'react'
import './UserForm.css'

const languages = ['ENG', 'RU', 'PL', 'FR', 'ESP'];

interface UserFormProps {
  onSubmit: {
    name: string,
    email: string,
    date: string,
    select: string,
    checkbox: boolean,
    radio: string
  } 
}

interface UserFormState {
  name: string
  email: string
  date: string
  select: string
  checkbox: boolean
  radio: string
}

class UserForm extends Component<UserFormProps, UserFormState> {
  nameInput = React.createRef<HTMLInputElement>()
  emailInput = React.createRef<HTMLInputElement>()
  dateInput = React.createRef<HTMLInputElement>()
  selectInput = React.createRef<HTMLSelectElement>()
  checkboxInput = React.createRef<HTMLInputElement>()
  radio1Input = React.createRef<HTMLInputElement>()
  radio2Input = React.createRef<HTMLInputElement>()
  fileInput = React.createRef<HTMLInputElement>()

  constructor(props: UserFormProps) {
    super(props)
    this.state = {
      name: '',
      email: '',
      date: '',
      select: '',
      checkbox: false,
      radio: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nameValue = this.nameRef.current?.value ?? ''
    const emailValue = this.emailRef.current?.value ?? ''
    const datelValue = this.emailRef.current?.value ?? ''
    const selectValue = this.emailRef.current?.value ?? ''
    const checkboxValue = this.emailRef.current?.value ?? ''
    const radioValue = this.emailRef.current?.value ?? ''
    this.props.onSubmit(nameValue, emailValue, datelValue, selectValue, checkboxValue, radioValue)
    this.setState({
      name: '',
      email: '',
      date: '',
      select: '',
      checkbox: false,
      radio: ''
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <h2>Write something</h2>
        <div className="user-form__floating form-text">
          <input 
            type="text"
            id="name"
            placeholder="Name" 
            ref={this.nameInput}
            className="user-form__name"
          />
          <label htmlFor="name"></label>
        </div>
        <div className="user-form__floating form-text">
          <input
            type="text"
            id="email"
            placeholder="Email"
            ref={this.emailInput} 
            className="user-form__mail"
          /> 
          <label htmlFor="email"></label>
        </div>
        <div>
        <label htmlFor="date"></label>
          {/*<p>Date of birth:</p>*/}
          <input
            type="date"
            id="date"
            placeholder="Date"
            ref={this.dateInput} 
            className="user-form__date"
          /> 
        </div>
        <div>
          <label htmlFor="select"></label>
          <select
            id="select"
            ref={this.selectInput}
            className="user-form__select"
          >
            <option value="">Select language</option>
            {languages.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="user-form__theme">
          <p>Choose theme:</p>
          <label htmlFor="radio1" className="user-form__light">Light</label>
          <input
            type="radio"
            id="radio1"
            name="radio"
            value="radio1"
            ref={this.radio1Input}
            className="user-form__radio"
          />
          <label htmlFor="radio2" className="user-form__dark">Dark</label>
          <input
            type="radio"
            id="radio2"
            name="radio"
            value="radio2"
            ref={this.radio2Input}
            className="user-form__radio"
          />
        </div>
        <div className="user-form__image">
          <label htmlFor="file">Add image: </label>
          <input
            type="file"
            id="file"
            ref={this.fileInput}
            className="user-form__file"
          />
        </div>
        <div className="user-form__agree">
          <input
            type="checkbox"
            id="checkbox"
            ref={this.checkboxInput}
            className="user-form__checkbox"
          />
          <label htmlFor="checkbox">
            <p>
              I agree to receive all the latest news and promotional mailings
              We can also send you free coupons and discounts on great products.
            </p>
          </label>
        </div>
        <div>
          <button type="submit" className="user-form__btn_save">Save</button>
        </div>
      </form>
    )
  }
}

export {UserForm}
