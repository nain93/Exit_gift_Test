import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./NavBarElement";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}></IconContext.Provider>

      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo href="/">.SHOP</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Ongoing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/mybid"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Mybid
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/collection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Collection
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/support"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Support
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign In
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
