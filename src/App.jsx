import React from 'react';
import { Page } from 'react-onsenui';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import NavBar from './components/organisms/NavBar/NavBar';
import VisaPage from './components/pages/VisaPage/VisaPage';

function App() {
  return (
      <div className="App">
        <Router>
          <Page
            renderToolbar={() => <NavBar/>}
          >
            <Switch>
              <Route exact path={'/'} component={HomePage}/>
              <Route exact path={'/visa'} component={VisaPage}/>
            </Switch>
          </Page>
        </Router>
      </div>
  );
}

export default App;
