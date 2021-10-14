import React from 'react'

function Sidebar() {
    return (
        <SidebarContainer>
          <Icon>
              <CloseIcon />
          </Icon>
          <SidebarMenu>
            <SidebarLink to="/"> Gloves </SidebarLink>
            <SidebarLink to="/"> Gear </SidebarLink>
            <SidebarLink to="/"> About </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to="/">Order Now</SidebarRoute>
          </SideBtnWrap>
        </SidebarContainer>

    )
}

export default Sidebar;