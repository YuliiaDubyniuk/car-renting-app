import logo from '/src/images/car-logo.png';
import { StyledHeader, StyledLink, StyledLogo } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
    <nav>
      <StyledLogo to="/">
        <img src={logo} alt="Logo" width={100}/>
        <p>CarRental</p>
      </StyledLogo>     
     <StyledLink to="/catalog">Catalog</StyledLink>
     <StyledLink to="/favorites">Favorites</StyledLink>
      </nav>
      </StyledHeader>
  )
}

export default Header;
