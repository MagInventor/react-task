import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export {NavMenu}
