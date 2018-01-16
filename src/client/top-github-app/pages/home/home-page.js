import React, { Fragment } from 'react';
import { userInfo } from './../../components/user-info/user-info'; 
import { Link } from 'react-router-dom';

import Layout from './../layout/layout';
import BaseComponent from './../../../common/base-component';
import Users from './users';

const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

class HomePage extends BaseComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { history } = this.props;
        
        return (
            <Layout
                history={history}>
                
                <h1>Top 5 GitHub Users</h1>

                <p>Tap the username to see more information</p>

                <Users users={topFive} />
            </Layout>
        )
    }
}

export default HomePage;