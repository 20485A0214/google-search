import './index.css'

const SuggestionItem = props => {
  const {suggestionList} = props
  const {suggestion} = suggestionList
  return (
    <li className="list-container">
      <p className="suggestionsName">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-image"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
