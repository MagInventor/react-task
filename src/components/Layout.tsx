import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <footer></footer>
    </>
  )
}

export {Layout}
