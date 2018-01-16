import React from 'react';
import BaseComponent from './../../../common/base-component';

class RedirectPage extends BaseComponent {

    constructor(props, context) {
        super(props, context);

        props.history.push(location);
    }

    render() {
        return null;
    }
};

export default RedirectPage;