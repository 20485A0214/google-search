import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    console.log(searchInput)
    const searchResults = suggestionsList.filter(eachLists =>
      eachLists.name.includes(searchInput),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          className="image"
          alt="google"
        />
        <div className="sub-container">
          <input
            type="search"
            className="input"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul>
            {searchResults.map(eachList => (
              <SuggestionItem suggestionList={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
