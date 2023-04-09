import React, { useState, useEffect, ChangeEvent } from 'react'
import './FormSearch.css'

interface FormSearchProps {
  initialSearchRequest: string
}

const FormSearch: React.FC<FormSearchProps> = ({ initialSearchRequest = '' }) => {
  const [searchRequest, setSearchRequest] = useState(initialSearchRequest || '')

  useEffect(() => {
    localStorage.setItem('searchRequest', searchRequest)
  }, [searchRequest])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchRequest = event.target.value
    setSearchRequest(newSearchRequest)
  }

  return (
    <form className="form-search">
      <label>
        <input 
          id="search"
          className="form-search__string_search"
          type="search"
          name="search"
          placeholder="Search"
          value={searchRequest}
          onChange={handleSearchChange}
        />
      </label>
      <input type="submit" value="search" className="form-search__submit"/>
    </form>
  )
}

export default FormSearch

