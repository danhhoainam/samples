import React from 'react';
import {
    NavItem,
    NavLink
} from 'reactstrap';

export const MyNavItem = ({ tag, path, label, className }) => (
    <NavItem>
        <NavLink tag={tag} to={path} className={className}>{label}</NavLink>
    </NavItem>
);