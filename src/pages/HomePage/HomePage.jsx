import { StyledBtn, StyledQuest, StyledQuestion, StyledResp, StyledWrapper } from './HomePage.styled';


const HomePage = () => {
  return (
    <>
      <StyledWrapper></StyledWrapper>
      <StyledQuestion>Going somewhere?</StyledQuestion>
      <StyledQuest>Need a car?</StyledQuest>
      <StyledResp>We can help!</StyledResp>
      <StyledBtn to="/catalog">Choose car</StyledBtn>
    </>
  )
}

export default HomePage
