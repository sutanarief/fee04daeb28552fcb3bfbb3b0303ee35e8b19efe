import styled from "styled-components";

export const LocationBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const LocationBarContent = styled.div`
  flex-direction: column;
  width: 100%;
  height: 60px;
  margin: 16px 0 0 0;
`;

export const LocationSubText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #6e7679;
`;

export const LocationButton = styled.button`
  display: flex;
  background-color: #fff;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
