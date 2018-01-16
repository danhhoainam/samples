import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';

import { userInfo } from '../user-info/user-info';
import { MyNavItem } from './navitem';
import { BaseComponent } from '../../../common/base-component';
import { subscribeEvent } from './../../../../utils/utils';

class MyNavbar extends BaseComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isOpenedNavbar: false
        };

        subscribeEvent(this, userInfo, () => this.forceUpdate());
    };

    toggleNavbar = () => {
        this.setState({
            isOpenedNavbar: !this.state.isOpenedNavbar
        });
    };

    render() {
        let user = userInfo.getUser();
        const { history } = this.props;

        const renderLinkNavItem = (path, label) => {
            const active = history.location.pathname === path;

            return <MyNavItem 
                        tag={Link} 
                        path={path} 
                        label={label} 
                        className={active ? "active" : ""} />;
        }

        return (
            <Navbar color="primary" expand="md" dark>
                <NavbarBrand href="/">TOP GITHUB</NavbarBrand>

                <NavbarToggler onClick={this.toggleNavbar} />

                <Collapse navbar isOpen={this.state.isOpenedNavbar}>
                    <Nav navbar className="ml-auto">
                        { renderLinkNavItem("/", "Home") }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    };
};

export default MyNavbar;