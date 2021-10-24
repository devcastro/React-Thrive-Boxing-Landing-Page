import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { Badge } from '@material-ui/core';
//import { ShoppingCart } from '@material-ui/icons';


const navStyle = {
    backgroundColor: "black",
    position: "sticky",
    top: "0"
}


const Navbar = ({ toggle, totalItems }) => {
    return (
        <>
        <div style={navStyle} >
            <Nav container position='fixed' >
                <NavLink to='/#' > T h r i v e </NavLink>
                <NavIcon onClick={toggle} >
                
                <p>Menu</p>
                    <Badge badgeContent={totalItems} color='secondary'>
                        <Bars /> 
                    </Badge>
                </NavIcon>
            </Nav>
            </div>
        </>
    );
};


export default Navbar;
