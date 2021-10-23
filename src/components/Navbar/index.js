import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { IconButton, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav position='fixed'>
                <NavLink to='/#'> T h r i v e </NavLink>
                <NavIcon onClick={toggle} >
                
                <p>Menu</p>
                    <Badge badgeContent={2} color='secondary'>
                        <Bars /> 
                    </Badge>
                </NavIcon>
            </Nav>
        </>
    );
};


export default Navbar;
