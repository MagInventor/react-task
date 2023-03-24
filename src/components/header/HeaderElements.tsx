import { FormSearch } from './FormSearch'
import './HeaderElements.css'

const HeaderElements = () => {
  return (
    <div className="header-elements">
      <div className="container">
        <div className="logo">Applitcation</div>
        <FormSearch />
      </div>
    </div>
  )
}

export {HeaderElements}
