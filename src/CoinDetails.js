import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './CoinDetails.css';

const CoinDetails = () => {
  const { state } = useLocation();
  const options2 = { style: 'currency', currency: 'USD' };
  const toDollars = new Intl.NumberFormat('en-US', options2);
  return (
    <div className="full-details-container d-flex">
      <div className="title-container">
        <h2>{ state.name }</h2>
        <h3>
          {' ( '}
          { state.symbol }
          {' ) '}
        </h3>
      </div>
      <div id="detail-tag">
        <h4>
          { state.name }
          {' Data '}
        </h4>
      </div>
      <ListGroup className="data-container">
        <ListGroup.Item className="row">
          <h3>
            {'Full-Name: '}
            { state.name }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Symbol: '}
            { state.symbol }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Price: '}
            { toDollars.format(state.priceUsd) }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'BTC Price: ( '}
            { state.priceBtc }
            {' ) BTC'}
          </h3>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CoinDetails;