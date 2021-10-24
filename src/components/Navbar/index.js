import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { Badge } from '@material-ui/core';
//import { ShoppingCart } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';



const navStyle = {
    backgroundColor: "black",
    position: "sticky",
    top: "0"
}



const Navbar = ({ toggle, totalItems }) => {
    const location = useLocation();
    return (
        <>
        <div style={navStyle} >
            <Nav container position='fixed' >
                <NavLink to='/' >
                     T h r i v e 
                </NavLink>
                {location.pathname === '/' && (
                <NavIcon onClick={toggle} >
                    <p>Menu</p>
                   
                    <Badge badgeContent={totalItems} color='secondary'>
                        <Bars /> 
                    </Badge> 
                   
                </NavIcon> ) }
            </Nav>
            </div>
        </>
    );
};


export default Navbar;
