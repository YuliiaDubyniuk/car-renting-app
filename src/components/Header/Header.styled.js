import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: rgba(18, 20, 23, 0.5);
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

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 26px;
  color: inherit;
`;

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 16px;
  padding: 30px 0;
  color: inherit;
`;
