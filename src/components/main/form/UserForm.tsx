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
    this.typeData = ''
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const userName = this.nameRef.current?.value || ''
    const userEmail = this.emailRef.current?.value || ''
    const userDate = this.dateRef.current?.value || ''
    const userSelect = this.selectRef.current?.value || ''
    const userRadio = this.radioRef.current?.checked || false
    const userFile = this.fileRef.current?.files?.[0]
    const userCheckbox = this.checkboxRef.current?.checked || false

    const user = {
      name: { title: 'name', data: userName || '' },
      mail: { title: 'email', data: userEmail || '' },
      date: { title: 'date', data: userDate || '' , content: 'date of birth'},
      select: { title: 'select', data: userSelect || '', content: 'language'},
      // radio: { title: 'radio', data: userRadio || '', content: 'theme'},
      file: { title: 'file', data: userFile || '' },
      checkbox: { title: 'checkbox', data: userCheckbox || '', content: 'consent sign'},
    }

    for (let key in user) {
      this.typeData = user[key].title

      if (!user[key].data) {
        const variable = user[key].content ? user[key].content : user[key].title
        this.setState({ nameError: `Please enter your ${variable}` })
        setTimeout(() => { this.setState({ nameError: '' })}, 5000)
        return
      }

      if (!/^[A-Z]/.test(userName)) {
        this.setState({ nameError: 'Name should start with uppercase letter' })
        setTimeout(() => { this.setState({ nameError: '' })}, 5000)
        return;
      }
    }

    const userData = {
      name: userName,
      email: userEmail,
      date: userDate,
      select: userSelect,
      checkbox: userCheckbox,
      radio: userRadio,
      file: userFile
    }

    localStorage.setItem('user-form', JSON.stringify(userData));
    this.setState({ nameError: null, submitted: true })

    event.currentTarget.reset()
    setTimeout(() => {
      this.setState({ nameError: null, submitted: false })
    }, 4000)
  }

  render() {
    const { nameError, submitted } = this.state
    const msg = 'Your data has been saved!'
    let typeData = this.typeData || ''

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
          {nameError && typeData ==='name' && <p className="user-form__error">{nameError}</p>}
        </div>
        <div className="user-form__floating form-text">
          <input
            type="email"
            id="email"
            placeholder="Email"
            ref={this.emailRef} 
            className="user-form__mail"
          />
          <label htmlFor="email"></label>
          {nameError && typeData ==='email' &&  <p className="user-form__error">{nameError}</p>}
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
          {nameError && typeData ==='date' && <p className="user-form__error">{nameError}</p>}
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
          {nameError && typeData === 'select' && <p className="user-form__error">{nameError}</p>}
        </div>
        <div className="user-form__theme">
          <div className="user-form__theme__content">
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
          {/*{nameError && typeData === 'radio' && <p className="user-form__error">{nameError}</p>}*/}
        </div>
        <div className="user-form__image">
          <label htmlFor="file">Add image: </label>
          <input
            type="file"
            id="file"
            ref={this.fileRef}
            className="user-form__file"
          />
          {nameError && typeData === 'file' && <p className="user-form__error">{nameError}</p>}
        </div>
        <div className="user-form__agree">
          <div className="user-form__agree_container">
            <input
              type="checkbox"
              id="checkbox"
              ref={this.checkboxRef}
              className="user-form__checkbox"
            />
            <label htmlFor="checkbox">
              <p className="user-form__agree_content">
                I agree to receive all the latest news and promotional mailings
                We can also send you free coupons and discounts on great products.
              </p>
            </label>
          </div>
          {nameError && typeData === 'checkbox' && <p className="user-form__error">{nameError}</p>}
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
