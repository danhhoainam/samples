import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import RedirectPage from './../pages/redirect/redirect-page';
import HomePage from './../pages/home/home-page';
import PersonPage from './../pages/person/person-page';

const AppRouter = (user = null) => {
    const requiredAuthen = (component) => user == null ? redirect('/') : component;
    const notRequiredAuthen = (component) => user != null ? redirect('/') : component;

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/person/:username" component={ PersonPage } />
            </Switch>
        </HashRouter>
    );
};

function redirect(location) {
    return <RedirectPage location={ location }/>;
}

export default AppRouter;