import {Component} from 'react'
import CryptoCurrenciesList from '../CryptocurrenciesList'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg">
        <CryptoCurrenciesList />
        <CryptocurrencyItem />
      </div>
    )
  }
}

export default CryptocurrencyTracker
