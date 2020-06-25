import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import InfoPage from './components/InfoPage';
import Footer from './components/Footer';

import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/info" component={InfoPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
