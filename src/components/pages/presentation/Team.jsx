import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class Team extends Component {
  render() {
    return (
      <div>
        <h2>TEAM
        </h2>
        <Link to='/current' style={{textDecoration: 'none'}}>
        <Button style={{textDecoration: 'none'}} variant="contained" color="secondary">Current Market</Button>
        </Link>
      </div>
    );
  }
}

export default Team;
