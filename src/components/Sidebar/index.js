import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import { Badge } from '@material-ui/core';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements.js';
//import  { totalItems }  from './Navbar/index.js';

const Sidebar = ({isOpen, toggle, totalItems}) => {

  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve()); 
  }

  useEffect(() => {
    fetchCart();
}, []);


    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarMenu>
            <SidebarLink to="/cart">

              <Badge badgeContent={totalItems} color='secondary' max={20}>
                Cart
              </Badge>
              
            </SidebarLink>
            <SidebarLink to="/#">Gloves</SidebarLink>
            <SidebarLink to="/#">Gear</SidebarLink>
            <SidebarLink to="/#">Contact Us</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
              <SidebarRoute to="/#">Order Now</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarContainer>

    )
}

export default Sidebar;