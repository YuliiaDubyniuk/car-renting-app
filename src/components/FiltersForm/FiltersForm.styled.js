import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;

  button:hover {
   background-color: #0B44CD;
}
`;
export const StyledFilter = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledFilterName = css`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.28;
  color: #8a8a89;
`;

export const StyledName = styled.span`
  ${StyledFilterName}
`;

export const StyledText = styled.p`
  ${StyledFilterName}
`;

const StyledSelectOption = css`
  padding: 14px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  background-color: #f7f7fb;
  border: 0;
`;
export const StyledSelect = styled.select`
  ${StyledSelectOption}
  border-radius: 14px;
`;

export const StyledFirstInput = styled.input`
  ${StyledSelectOption}
  width: 71px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  padding-left: 75px;

  :focus-visible {
    outline: 0;
  }
`;

export const StyledSecondInput = styled.input`
  ${StyledSelectOption}
  width: 96px;
  border-radius: 0 14px 14px 0;
  padding-left: 50px;
`;
export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 24px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
`;

export const StyledBtn = styled.button`
padding: 14px 44px;
margin-top: auto;
height: 48px;
font-size: 14px;
font-weight: 500;
line-height: 1.43;
color: #FFFFFF;
background-color: #3470FF;
border: 0;
border-radius: 14px;
transition: background-color ease-in-out 250ms;

`
