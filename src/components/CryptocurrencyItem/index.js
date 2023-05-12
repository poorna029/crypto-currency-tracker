import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {item} = this.props
    // console.log(item)
    if (item === undefined) {
      return null
    }
    const {usdValue, euroValue, currencyName, currencyLogo, id} = item
    console.log(usdValue, euroValue, currencyName, currencyLogo)
    // console.log(item.usdValue)
    // console.log('k', this.props)
    // console.log('l', item)
    return (
      <li className="CryptocurrencyItem">
        <div className="logo-name">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currency-logo"
          />
          <p>{currencyName}</p>
        </div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </li>
    )
  }
}

export default CryptocurrencyItem
