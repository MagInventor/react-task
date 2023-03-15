import { NavLink } from 'react-router-dom'

const Navmenu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export {Navmenu}
