import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements.js';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarMenu>
            <SidebarLink to="/#">Cart</SidebarLink>
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