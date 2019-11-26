import React from 'react';
import { Page } from 'react-onsenui';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/organisms/NavBar/NavBar';
import VisaPage from './components/pages/VisaPage/VisaPage';
import ListPage from './components/pages/ListPage/ListPage';
import HomePage from './components/pages/HomePage/HomePage';
import Team from "./components/pages/presentation/Team";
import CurrentMarket from "./components/pages/presentation/CurrentMarket";
import Timeline from "./components/pages/presentation/Timeline";
import Final from "./components/pages/presentation/Final";

function App() {
  return (
      <div className="App">
        <Router>
          <Page
            style={{ backgroundColor: '#F4F4F4'}}
            renderToolbar={() => <NavBar/>}
          >
            <Switch>
              <Route exact path={'/'} component={HomePage}/>
              <Route exact path={'/team'} component={Team}/>
              <Route exact path={'/list'} component={ListPage}/>
              <Route exact path={'/visa/travel'} component={VisaPage}/>
              <Route exact path={'/visa/work'} component={VisaPage}/>
              <Route exact path={'/team'} component={Team}/>
              <Route exact path={'/current'} component={CurrentMarket}/>
              <Route exact path={'/timeline'} component={Timeline}/>
              <Route exact path={'/end'} component={Final}/>
            </Switch>
          </Page>
        </Router>
      </div>
  );
}

export default App;
