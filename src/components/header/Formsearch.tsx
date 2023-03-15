const Formsearch = () => {
  return (
    <form className="form-search">
      <label>
        <input 
          id="search"
          className="form-search__string_search"
          type="search"
          name="search"
          placeholder="Search"
        />
      </label>
        <input type="submit" value="search" className="form-search__submit"/>
    </form>
  )
}

export {Formsearch}
