import styled, { css } from "styled-components";
import car from 'src/images/car-photo.jpg';
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  position: absolute;
  top: 78px;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background-image: url(${car});
  background-size: cover;
  background-repeat: no-repeat;

`

const StyledP = css`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  color: #ffffff;
  text-align: right;
`;

export const StyledQuestion = styled.p`
  ${StyledP}
  margin-top: 150px;
  margin-bottom: 8px;
`;

export const StyledQuest = styled.p`
  ${StyledP}
  margin-bottom: 16px;
`;

export const StyledResp = styled.p`
  ${StyledP}
  font-size: 38px;
`;

export const StyledBtn = styled(Link)`
  display: inline-block;
  padding: 40px 10px;
  width: 148px;
  height: 148px;
  margin-top: 110px;
  margin-left: 1000px;
  text-align: center;
  font-size: 26px;
  line-height: 1.4;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #3470FF;
  border: 0;
  border-radius: 50%;
  transition: background-color ease-in-out 250ms;

 &:hover{
  background-color: #0B44CD;
 }

`