
const Formsearch = () => {
  return (
    <form className="form-search">
      <label>
        <input 
          id="search"
          type="search"
          name="search"
          placeholder="Search"
        />
      </label>
      <button className="form-search__btn">
        <input type="submit" value="search" />
      </button>
    </form>
  )
}

export {Formsearch}

       