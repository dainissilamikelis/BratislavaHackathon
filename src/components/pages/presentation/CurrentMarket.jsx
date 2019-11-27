import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import './styles.scss'

class CurrentMarket extends Component {
  render() {
    return (
      <div className='market-info'>
        <h2>Current Markets:
        </h2>
        <h4>Partnership with World Merit, Mladi info and other partners:</h4>
        <h4>(Around 200 developing country Visa applications per year)</h4>
        <h5>💰 12 000 EUR</h5>
        <h4>Youth segment for camps and international events to UK</h4>
        <h5>💰 42 000 EUR per year</h5>
        <h4>Youth segment for camps and international events to UK, Europe, Canada, USA</h4>
        <h5>💰 500 000 EUR per year</h5>
        <h4>Visa Applications from developed countries to largest countries Worldwide:</h4>
        <h5>💰 50 million EUR</h5>

        <Link to='/timeline' style={{textDecoration: 'none'}}>
          <Button variant="contained" color="secondary">Our Timeline</Button>
        </Link>
      </div>
    );
  }
}

export default CurrentMarket;
