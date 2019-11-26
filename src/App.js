import React from 'react';
import { Page, Toolbar, ToolbarButton, Card, Icon, Fab } from 'react-onsenui';
import './App.css';

const AppToolbar = () => (
  <Toolbar>
    <div className="left">
    <ToolbarButton>
        <Icon icon="md-home" />
      </ToolbarButton>
    </div>
    <div className="center">
      Hello Bratislava!
    </div>
    <div className="right">
      <ToolbarButton>
        <Icon icon="md-menu" />
      </ToolbarButton>
    </div>
  </Toolbar>
);

function App() {
  return (
    <div className="App">
      <Page
        renderToolbar={() => <AppToolbar />}
      >
        <Card>
          <h1>Lorem ipsum</h1>
          <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.t</p>
        </Card>
        <Card>
          <h1>Lorem ipsum</h1>
          <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.t</p>
        </Card>
        <Card>
        <h1>Lorem ipsum</h1>
          <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.t</p>
        </Card>
      </Page>
    </div>
  );
}

export default App;
