import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Repos from './pages/repos'
import Followers from './pages/followers';
import Starred from './pages/starred';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Repos } />
            <Route path="/followers" component={ Followers } />
            <Route path="/starred" component={ Starred } />


        </Switch>
    </BRouter>
);

export default Routes;