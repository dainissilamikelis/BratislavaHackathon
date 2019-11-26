import React from 'react';
import { Page, Toolbar, ToolbarButton } from 'react-onsenui'
import './App.css';

function App() {
  return (
    <div className="App">
      <Page>
        <Toolbar>
          <ToolbarButton> I am in onsen </ToolbarButton>
        </Toolbar>
      </Page>
    </div>
  );
}

export default App;
