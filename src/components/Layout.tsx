import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'
import { Footer } from './header/Footer'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export {Layout}
