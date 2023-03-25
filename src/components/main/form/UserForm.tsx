import React, { Component } from 'react'
import './UserForm.css'

const languages = ['ENG', 'RU', 'PL', 'FR', 'ESP']

interface UserFormProps {}

interface UserFormState {
  nameError: string | null
  submitted: boolean
}

class UserForm extends Component<UserFormProps, UserFormState> {
  nameRef = React.createRef<HTMLInputElement>()
  emailRef = React.createRef<HTMLInputElement>()
  dateRef = React.createRef<HTMLInputElement>()
  selectRef = React.createRef<HTMLSelectElement>()
  checkboxRef = React.createRef<HTMLInputElement>()
  radioRef = React.createRef<HTMLInputElement>()
  fileRef = React.createRef<HTMLInputElement>()

  constructor(props: UserFormProps) {
    super(props)
    this.state = {
      nameError: null,
      submitted: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const userName = this.nameRef.current?.value || ''
    const userEmail = this.emailRef.current?.value || ''
    const userDate = this.dateRef.current?.value || ''
    const userSelect = this.selectRef.current?.value || ''
    const userCheckbox = this.checkboxRef.current?.checked || false
    const userRadio = this.radioRef.current?.checked || false
    const userFile = this.fileRef.current?.files?.[0]

    const userData = {
      userName,
      userEmail,
      userDate,
      userSelect,
      userCheckbox,
      userRadio,
      userFile
    }
 
    localStorage.setItem('user-form', JSON.stringify(userData));
    this.setState({ nameError: null, submitted: true })
    event.currentTarget.reset()
  }

  render() {
    const { nameError, submitted } = this.state
    const msg = 'Your data has been saved!'

    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <h2>Write something</h2>
        <div className="user-form__floating form-text">
          <input 
            type="text"
            id="name"
            placeholder="Name" 
            ref={this.nameRef}
            className="user-form__name"
          />
          <label htmlFor="name"></label>
        </div>
        <div className="user-form__floating form-text">
          <input
            type="text"
            id="email"
            placeholder="Email"
            ref={this.emailRef} 
            className="user-form__mail"
          /> 
          <label htmlFor="email"></label>
        </div>
        <div>
        <label htmlFor="date"></label>
          <input
            type="date"
            id="date"
            placeholder="Date"
            ref={this.dateRef} 
            className="user-form__date"
          /> 
        </div>
        <div>
          <label htmlFor="select"></label>
          <select
            id="select"
            ref={this.selectRef}
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
            value="light"
            ref={this.radioRef}
            className="user-form__radio"
          />
          <label htmlFor="radio2" className="user-form__dark">Dark</label>
          <input
            type="radio"
            id="radio2"
            name="radio"
            value="dark"
            ref={this.radioRef}
            className="user-form__radio"
          />
        </div>
        <div className="user-form__image">
          <label htmlFor="file">Add image: </label>
          <input
            type="file"
            id="file"
            ref={this.fileRef}
            className="user-form__file"
          />
        </div>
        <div className="user-form__agree">
          <input
            type="checkbox"
            id="checkbox"
            ref={this.checkboxRef}
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
          {submitted && (
            <div className="user-form__success">{msg}</div>
          )}
        </div>
      </form>
    )
  }
}

export {UserForm}
