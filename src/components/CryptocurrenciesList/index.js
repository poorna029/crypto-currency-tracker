import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = async () => {
    const res = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const data = await res.json()
    const modifiedData = data.map(p => ({
      id: p.id,
      currencyLogo: p.currency_logo,
      currencyName: p.currency_name,
      euroValue: p.euro_value,
      usdValue: p.usd_value,
    }))

    this.setState({data: modifiedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state

    if (isLoading) {
      return <div data-testid="loader">Loading...</div>
    }

    return (
      <div className="main">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />

        <div className="CryptocurrencyContainer">
          <h3>Coin Type</h3>
          <h3>USD</h3>
          <h3>EURO</h3>
          <ul>
            {data.map(p => (
              <CryptocurrencyItem item={p} key={p.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
