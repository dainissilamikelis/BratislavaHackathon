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

  const NavBar= withRouter(({ history }) => (
    <Toolbar style={NavBarStyle}>
        <div className="left">
            <ToolbarButton>
                <Icon icon="md-home" onClick={() => { history.push('/') }}></Icon>
            </ToolbarButton>
        </div>
        <div className="center" style={{ color: '#F4F4F4'}}>
            Visa Helper
        </div>
        <div className="right">
            <ToolbarButton onClick={() => { history.push('/team') }}>
                Team
            </ToolbarButton>
        </div>
    </Toolbar>

  ));

  export default NavBar;