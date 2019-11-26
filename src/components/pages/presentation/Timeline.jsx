import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class Timeline extends Component {
  render() {
    return (
      <div>
        <h2>TIMELINE</h2>
        <Link to='/end' style={{textDecoration: 'none'}}>
          <Button variant="contained" color="secondary">Our Timeline</Button>
        </Link>
      </div>
    );
  }
}

export default Timeline;
