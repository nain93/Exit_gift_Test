import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Ongoing
          </SidebarLink>
          <SidebarLink to="/mybid" onClick={toggle}>
            Mybid
          </SidebarLink>
          <SidebarLink to="/collection" onClick={toggle}>
            Collection
          </SidebarLink>
          <SidebarLink to="/support" onClick={toggle}>
            Support
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
