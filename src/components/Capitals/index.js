import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeInput = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const countryAndCapitals = countryAndCapitalsList.find(
      eachState => eachState.id === activeCapitalId,
    )

    return countryAndCapitals.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="blue-container">
        <div className="white-container">
          <h1 className="country">Countries and Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              value={activeCapitalId}
              onChange={this.onChangeInput}
            >
              {countryAndCapitalsList.map(eachState => (
                <option
                  key={eachState.id}
                  value={eachState.id}
                  className="option"
                >
                  {eachState.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="last-para">is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
