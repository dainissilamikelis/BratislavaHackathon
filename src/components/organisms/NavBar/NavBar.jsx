import React, { Component } from 'react';
import {
    Toolbar,
    ToolbarButton,
    Icon,
  } from 'react-onsenui';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <Toolbar>
              <div className="left">
              <ToolbarButton>
                  <Icon icon="md-home" />
                </ToolbarButton>
              </div>
              <div className="center">
                Visa Helper
              </div>
            </Toolbar>
        );
    }
}
 
export default NavBar;