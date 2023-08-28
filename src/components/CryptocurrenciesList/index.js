// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderListHeader = () => (
    <div className="list-header-container">
      <p className="list-header-names">Coin type</p>
      <div className="list-header-usd-euro-container">
        <p className="list-header-name2">USD</p>
        <p className="list-header-names">EURO</p>
      </div>
    </div>
  )

  render() {
    const {cryptoCurrencyData} = this.props
    return (
      <div className="crypto-currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="crypto-currency-list-container">
          {this.renderListHeader()}
          <ul className="list-container">
            {cryptoCurrencyData.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                currencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
