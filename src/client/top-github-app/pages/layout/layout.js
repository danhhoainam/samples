import React, { Fragment } from 'react';

import MyNavbar from './../../components/navbar/navbar';
import { BaseComponent } from './../../../common/base-component';

class Layout extends BaseComponent {

    render() {
        const { children, history } = this.props;
        
        return (
            <Fragment>
                <MyNavbar history={history}/>

                { children }

            </Fragment>
        );
    };
};

export default Layout;