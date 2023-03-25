import React, { Component } from 'react'
import { UserForm } from './UserForm'
import './Form.css'

const Form = () => {
   return (
    <div className="form-page">
      <div className="container">
        <UserForm />
      </div>
    </div>
  )
}

export {Form}
