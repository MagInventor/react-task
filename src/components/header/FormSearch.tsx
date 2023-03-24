import React from 'react'

interface Props {}

interface State {
  searchRequest: string
}

class FormSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { searchRequest: '' }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  componentDidMount() {
    const searchRequest = localStorage.getItem('searchRequest')
    if (searchRequest) {
      this.setState({ searchRequest })
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchRequest', this.state.searchRequest)
  }

  handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchRequest = event.target.value
    localStorage.setItem('searchRequest', searchRequest)
    this.setState({ searchRequest })
  }

  render() {
    return (
      <form className="form-search">
        <label>
          <input 
            id="search"
            className="form-search__string_search"
            type="search"
            name="search"
            placeholder="Search"
            value={this.state.searchRequest}
            onChange={this.handleSearchChange}
          />
        </label>
          <input type="submit" value="search" className="form-search__submit"/>
      </form>
    )
  }
}
export {FormSearch}
