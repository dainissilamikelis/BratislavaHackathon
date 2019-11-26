import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import img1 from './team-1.jpeg';
import img2 from './team-2.jpeg';
import './styles.scss';

class Team extends Component {
  render() {
    return (
      <div className='team-page'>
        <h2>Team</h2>
        <ul className='team-list'>
          <li><h4>Gustavs</h4><p>Social Entrepreneur</p></li>
          <li><h4>Dainis</h4><p>Lead developer</p></li>
          <li><h4>Naomi</h4><p>Social Scientist</p></li>
          <li><h4>Elvijs</h4><p>Software developer</p></li>
        </ul>
        <img src={img1} alt={'team'}/>
        <Link to='/current' style={{textDecoration: 'none'}}>
          <Button style={{textDecoration: 'none'}} variant="contained" color="secondary">Current Market</Button>
        </Link>
      </div>
    );
  }
}

export default Team;
