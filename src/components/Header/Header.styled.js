import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: lightgrey;
  box-shadow: 0 8px 6px -6px black;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 29px;
    width: 1242px;
    font-weight: 700;
    color: #0b44cd;
  }
`;

export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 36px;
  color: inherit;
`;

export const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 20px;
  padding: 30px 0;
`;
