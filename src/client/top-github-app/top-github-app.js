import React, { Fragment } from 'react';
import BaseComponent from './../common/base-component';
import AppRouter from './routers/app-router';

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

import './../common/styles/styles.scss';

class TopGithubApp extends BaseComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Fragment>
                <AppRouter />
            </Fragment>
        );
    }
};

export default TopGithubApp;