import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(21, 247, 40);
  color: rgb(43, 42, 42);
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.8rem;
  }
`;

export const NavLink = styled.a`
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: rgb(21, 247, 40);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()}. Designed by{" "}
      <NavLink href="https://github.com/t-ageru24">Tadesse Ageru</NavLink>
    </FooterContainer>
  );
};

export default Footer;
