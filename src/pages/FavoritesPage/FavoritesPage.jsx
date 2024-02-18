import { useSelector } from "react-redux";
import Card from "/src/components/CardsList/Card/Card";
import { selectFavorites } from "/src/redux/favorites/selectors";
import { StyledList } from "/src/components/CardsList/CarsList.styled";
import { StyledInfo } from "./FavoritesPage.styled";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length
      ? <StyledList>
          {favorites.map((car) => {
            return <Card key={car.id} car={car} />;
          })}
      </StyledList>     
      : <StyledInfo>There are no favorite cars yet. You could <Link to="/catalog">choose</Link> right now. </StyledInfo>}
    </>
  )
}

export default FavoritesPage;
