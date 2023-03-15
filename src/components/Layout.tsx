import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header>
      <div className="container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
    <Outlet />
    <footer>2023</footer>
    </>
  )
}

export {Layout}
