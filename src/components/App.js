import React from 'react';
import DisplayCharacters from '../containers/displayCharacters';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetail from '../containers/displayCharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DisplayCharacters} />
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
