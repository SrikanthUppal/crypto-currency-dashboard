// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyDetails
  return (
    <li className="list-item">
      <div className="list-item-logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p className="names">{currencyName}</p>
      </div>
      <div className="list-item-usd-euro-container">
        <p className="names2">{usdValue}</p>
        <p className="names">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
