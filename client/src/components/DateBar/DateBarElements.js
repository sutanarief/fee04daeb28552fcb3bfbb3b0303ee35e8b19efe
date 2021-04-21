import styled from "styled-components";

export const DateBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 40px;
  border-bottom: 2px solid #f1f1f2;
`;

export const DateItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 54px;
  height: 54px;
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
  align-content: center;
  justify-content: center;
  background-color: #424749;
  color: #f1f1f2;
  border-radius: 50%;
`;

export const DayText = styled.span`
  font-weight: 400;
  font-size: 12px;
`;

export const DateText = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
