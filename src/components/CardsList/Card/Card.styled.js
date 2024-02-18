import styled from "styled-components";

export const StyledLi = styled.li`
  width: 274px;  
  `;
export const StyledThumb = styled.div`
  position: relative;
  margin-bottom: 14px;

  img {
    width: 274px;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
  }
`;

export const StyledBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  height: 18px;
  border: none;
  padding: 0;
  background: transparent;
`;

export const StyledTitleWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 8px;
`;
export const StyledTitle = styled.p`
  display: flex;
  color: #121417;

  span {
    color: #3470ff;
  }
`;

export const StyledInfoWrapper = styled.p`
  display: flex;
  flex-wrap: no-wrap;
  margin-bottom: 4px;

  & :first-child {
    padding-left: 0;
  }
  & :last-child {
    border-right: none;
    padding-right: 0;
  }
  
`;

export const StyledInfo = styled.p`
  padding: 0 6px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  border-right: 1px solid rgba(18, 20, 23, 0.1)
`;

export const StyledMoreBtn = styled.button`
  padding: 12px 99.5px;
  margin-top: 28px;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  color: #ffffff;
  background-color: #3470FF;
  border: 0;
  border-radius: 12px;
  transition: background-color ease-in-out 250ms;

  &:hover{
    background-color: #0B44CD;
  }

`;