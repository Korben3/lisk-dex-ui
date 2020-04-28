import React from 'react';
import './PlaceOrder.css';

export default class MarketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div style={{ padding: '10px' }}>
          <div className="action-name">MARKETS</div>
          {Object.keys(this.props.markets).map(marketSymbol => {
            return (
              <div key={marketSymbol}>
                <p>Current market: <b>{marketSymbol.toUpperCase()}</b></p>
                <p>More markets coming soon!</p>
              </div>
            );
          })}
          <small>
            <br></br>Data refreshed every {Math.round(this.props.refreshInterval / 1000)} seconds.
          </small>
        </div>
      </>
    );
  }
}