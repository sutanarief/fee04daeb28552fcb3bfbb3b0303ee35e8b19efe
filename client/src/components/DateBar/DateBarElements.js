import styled from "styled-components";

export const DateBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  border-bottom: 2px solid #f1f1f2;
  background-color: #fff;
`;

export const DateItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  margin: 8px;
  align-content: center;
  justify-content: center;
  background-color: #fff;
  color: #424749;
`;

export const SelectedDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  margin: 8px;
  align-content: center;
  justify-content: center;
  background-color: #424749;
  color: #f1f1f2;
  border-radius: 50%;
`;

export const DayText = styled.span`
  font-weight: 400;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

export const DateText = styled.span`
  font-weight: 600;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
