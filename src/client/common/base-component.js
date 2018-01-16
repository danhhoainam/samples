import React from 'react';

/*  */
export class BaseComponent extends React.Component {
    unsubscribeEvents = [];
    subscribeEvents = [];
    mounted = false;

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.mounted = true;
        this.subscribeEvents.forEach(subscribe => subscribe());
    }

    componentWillUnmount() {
        this.mounted = false;
        this.unsubscribeEvents.forEach(unsubscribe => unsubscribe());
    }

    setState(newState) {
        if (this.mounted) {
            super.setState(newState);
        }
    }

    safeUpdate() {
        if (this.mounted) {
            this.forceUpdate();
        }
    }

    addUnsubscribeEvent(unsubscribeEvent) {
        this.unsubscribeEvents.push(unsubscribeEvent);
    }

    addSubscribeEvent(subscribeEvent) {
        this.subscribeEvents.push(subscribeEvent);
    }
}

export default BaseComponent;