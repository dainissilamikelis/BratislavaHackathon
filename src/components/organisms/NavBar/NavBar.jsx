import React  from 'react';
import { withRouter } from 'react-router-dom'
import {
    Toolbar,
    ToolbarButton,
    Icon,
  } from 'react-onsenui';

  
  const NavBarStyle = {
      backgroundColor: '#282828'
  }

  const NavBar= withRouter(({ history, type, fromCountry, toCountry }) => (
    <Toolbar style={NavBarStyle}>
        <div className="left">
        <ToolbarButton>
            <Icon icon="md-home" onClick={() => { history.push('/') }}></Icon>
        </ToolbarButton>
        </div>
        <div className="center" style={{ color: '#F4F4F4'}}>
            Visa Helper
        </div>
    </Toolbar>

  ));

  export default NavBar;