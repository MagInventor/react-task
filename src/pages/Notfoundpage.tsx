import { Link } from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div className="container">
      <h1>Not found</h1>
      <p>404</p>
      <p> This page doesn't exist. Go <Link to="/">home</Link></p>
    </div>
  )
}

export default Notfoundpage
