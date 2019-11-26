import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class CurrentMarket extends Component {
  render() {
    return (
      <div>
        <h2>Current CurrentMarkets
        </h2>
        <Link to='/timeline' style={{textDecoration: 'none'}}>
        <Button variant="contained" color="secondary">Our Timeline</Button>
        </Link>
        </div>
    );
  }
}

export default CurrentMarket;
