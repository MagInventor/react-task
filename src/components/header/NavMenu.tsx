import { NavLink } from 'react-router-dom'
import './NavMenu.css'

const NavMenu = () => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/form">Form</NavLink>
      </div>
    </nav>
  )
}

export default NavMenu
