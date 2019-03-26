import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFutbol, faBasketballBall, faCalendarAlt, faInfoCircle, faArrowRight, faArrowAltCircleRight, faVideo, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header/header';
import Menu from './components/side-menu/menu';
import Footer from './components/footer/footer';
import DashboardPage from './pages/dashboard/DashboardPage';
import EventsDetails from './pages/eventsDetails/EventsDetailsPage';

import './pages/dashboard/dashboard.css';

import history from './services/history';

library.add(faFutbol, faBasketballBall, faCalendarAlt, faInfoCircle, faArrowRight, faArrowAltCircleRight, faVideo, faFileInvoiceDollar)

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={history}>
        <Switch>
          <div>
            <Header />
            <div className="container">
              <Menu />
              <Route exact path="/" component={DashboardPage}></Route>
              <Route exact path="/evento/:competitionId/:eventId" component={EventsDetails}></Route>
            </div>
            <Footer />
          </div>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
