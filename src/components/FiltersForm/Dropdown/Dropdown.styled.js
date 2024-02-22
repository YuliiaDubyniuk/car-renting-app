import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  padding: 14px 45px 14px 18px;
  height: 48px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  background-color: #f7f7fb;
  border: 0;
  border-radius: 14px;
`;

export const DropdownButton = styled.button`
 position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  padding: 0;
  background: transparent;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  padding: 14px 8px 14px 18px;
  width: 100%;
  height: 272px;
  background-color: #ffffff;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-top: none;
  border-radius: 14px;
  overflow: scroll;
  z-index: 10;

  & :last-child {
    margin-bottom: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {    
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }
`;

export const Option = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
`;