import React, { useState, useRef } from 'react'
import './UserForm.css'

const languages = ['ENG', 'RU', 'PL', 'FR', 'ESP']

interface UserData {
  name: string
  email: string
  date: string
  select: string
  checkbox: boolean
  radio: boolean
  file: File | undefined
}

const UserForm = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)
  const checkboxRef = useRef<HTMLInputElement>(null)
  const radioRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const [nameError, setNameError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [typeData, setTypeData] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const userName = nameRef.current?.value || ''
    const userEmail = emailRef.current?.value || ''
    const userDate = dateRef.current?.value || ''
    const userSelect = selectRef.current?.value || ''
    const userRadio = radioRef.current?.checked || false
    const userFile = fileRef.current?.files?.[0]
    const userCheckbox = checkboxRef.current?.checked || false

    const user: { [key: string]: User } = {
      name: { title: 'name', data: userName || '' },
      mail: { title: 'email', data: userEmail || '' },
      date: { title: 'date', data: userDate || '', content: 'date of birth' },
      select: { title: 'select', data: userSelect || '', content: 'language' },
      // radio: { title: 'radio', data: userRadio || '', content: 'theme'},
      file: { title: 'file', data: userFile || '' },
      checkbox: { title: 'checkbox', data: userCheckbox || '', content: 'consent sign' },
    }

    for (let key in user) {
      setTypeData(user[key].title)

      if (!user[key].data) {
        const variable = user[key].content ? user[key].content : user[key].title
        setNameError(`Please enter your ${variable}`)
        setTimeout(() => {setNameError('')}, 5000)
        return
      }

      if (!/^[A-Z]/.test(userName)) {
        setNameError('Name should start with uppercase letter')
        setTimeout(() => {setNameError('')}, 5000)
        return
      }
    }

    const userData: UserData = {
      name: userName,
      email: userEmail,
      date: userDate,
      select: userSelect,
      checkbox: userCheckbox,
      radio: userRadio,
      file: userFile,
    }

    localStorage.setItem('user-form', JSON.stringify(userData))
    setNameError(null)
    setSubmitted(true)

    event.currentTarget.reset()
    setTimeout(() => {
      setNameError(null)
      setSubmitted(false)
    }, 4000)
  }

  const msg = 'Your data has been saved!'

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Write something</h2>
      <div className="user-form__floating form-text">
        <input 
          type="text"
          id="name"
          placeholder="Name" 
          ref={nameRef}
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
          ref={emailRef} 
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
          ref={dateRef} 
          className="user-form__date"
        /> 
        {nameError && typeData ==='date' && <p className="user-form__error">{nameError}</p>}
      </div>
      <div>
        <label htmlFor="select"></label>
        <select
          id="select"
          ref={selectRef}
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
            ref={radioRef}
            className="user-form__radio"
          />
          <label htmlFor="radio2" className="user-form__dark">Dark</label>
          <input
            type="radio"
            id="radio2"
            name="radio"
            value="dark"
            ref={radioRef}
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
          ref={fileRef}
          className="user-form__file"
        />
        {nameError && typeData === 'file' && <p className="user-form__error">{nameError}</p>}
      </div>
      <div className="user-form__agree">
        <div className="user-form__agree_container">
          <input
            type="checkbox"
            id="checkbox"
            ref={checkboxRef}
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

export default UserForm
