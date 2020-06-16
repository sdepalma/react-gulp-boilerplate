import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Page from './Page';

const App = () => (
    <Router>
        <div className="container">
            <header>
                <div id="dss-logo">
                    <img src='/images/dss-logo.png' />
                </div>
                <h1>Chromecast Test Sender</h1>
            </header>

            <nav>
                <ul>
                    <li>Application ID</li>
                    <li>Manifest & License</li>
                    <li className="active">Content</li>
                    <li>Media Controls</li>
                </ul>
            </nav>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/page' component={Page} />
                <Route path={`/page/:subpage`} component={Page} />
            </Switch>
        </div>
    </Router>
);

export default App;
