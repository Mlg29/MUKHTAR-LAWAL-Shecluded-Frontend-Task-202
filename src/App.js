import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "../src/pages/homepage"
import CatPage from "../src/pages/cat page"
import LotrPage from "../src/pages/Lotr page"
import Navigation from "../src/components/Navigation"
import PageOne from "../src/pages/cat page/pageOne"
import nextPage from './pages/cat page/nextPage';


function App() {
  return (
    <div className="App">
      <Navigation />
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/cat" component={CatPage} />
            <Route exact path="/lotr" component={LotrPage} />
            <Route exact path="/cat:page1" component={PageOne} />
            <Route exact path="/cat:next" component={nextPage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
