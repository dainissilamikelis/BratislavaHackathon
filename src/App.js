import React, { useState } from 'react';
import {
  Page,
  Toolbar,
  ToolbarButton,
  Select,
  Icon,
  ActionSheet,
} from 'react-onsenui';
import './App.css';
import VisaCard, { VisaType } from './components/molecules/VisaCard/VisaCard';



const AppToolbar = () => {
  const [isOpen, setOpen] = useState(false)
    return (
    <Toolbar>
      <div className="left">
      <ToolbarButton>
          <Icon icon="md-home" />
        </ToolbarButton>
      </div>
      <div className="center">
        Hello Bratislava!
      </div>
    </Toolbar>
  );
}

function App() {
  return (
    <div className="App">
      <Page
        renderToolbar={() => <AppToolbar />}
      >
        <VisaCard type={VisaType.work} fromCountry={"Ukraine"} toCountry={"France"}/>
        <VisaCard type={VisaType.travel} fromCountry={"Ukraine"} toCountry={"France"}/>
      </Page>
    </div>
  );
}

export default App;
