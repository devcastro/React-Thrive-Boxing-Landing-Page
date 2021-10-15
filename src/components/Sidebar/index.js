import React from 'react';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarBtnWrap, 
    SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarMenu>
            <SidebarLink to="#/">Gloves</SidebarLink>
            <SidebarLink to="#/">Gear</SidebarLink>
            <SidebarLink to="#/">Cart</SidebarLink>
            <SidebarLink to="#/">About</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
              <SidebarRoute to="#/">Order Now</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarContainer>

    )
}

export default Sidebar;