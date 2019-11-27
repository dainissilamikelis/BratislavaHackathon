import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import time from './timLine.png';

class Timeline extends Component {
  render() {
    return (
      <div>
        <h2>TIMELINE</h2>
        <div style={{ margin: 'auto' }}>
          <img  src={time} />
        </div>
        <Link to='/end' style={{textDecoration: 'none', margin: 'auto'}}>
          <Button variant="contained" color="secondary">End.</Button>
        </Link>
      </div>
    );
  }
}

export default Timeline;
