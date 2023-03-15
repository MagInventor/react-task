import { NavLink } from 'react-router-dom'

const Navmenu = () => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export {Navmenu}
