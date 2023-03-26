import React, { Component } from 'react'
import { UserForm } from './UserForm'
import UserCard from './UserCard'
import './Form.css'

const Form = () => {
   return (
    <div className="form-page">
      <div className="container">
        <UserForm />
        <div className="users-list">
          <UserCard />
        </div>
      </div>
    </div>
  )
}

export {Form}
