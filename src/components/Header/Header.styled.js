import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  margin-bottom: 20px;
  background-color:  lightgrey;
  padding: 0 40px;
  box-shadow: 0 8px 6px -6px black;

  nav {
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin: 0 auto;
    width: 100%;
    font-weight: 700;
    color: #0B44CD;
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
`
