import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  position: relative;
  bottom:0;
  width: 100%;
  background-color:rgb(21, 247, 40);
  color:rgb(43, 42, 42);
  text-align: center;
  padding: 1rem 0;
`;
export const NavLink = styled.a`
  color:rgb(0, 0, 0);
  text-decoration: none;
  &:hover {
    color:rgb(21, 247, 40);
  }
`;
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; Copyright {new Date().getFullYear()}.  Designed by {"  "}
      <NavLink href="https://github.com/t-ageru24"> Tadesse Ageru</NavLink>
    </FooterContainer>
  );
};

export default Footer;
