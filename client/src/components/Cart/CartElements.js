import styled from "styled-components";

export const CartWrapper = styled.div`
  margin: 16px 16px 0 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 100%;
    bottom: 0;
    left: 0;
    position: fixed;
    justify-content: center;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      #ffffff
    );
  }
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 16px 16px;
  align-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #a23530;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 768px) {
    width: 95%;
    margin-bottom: 24px;

    border-radius: 10px;
  }
`;

export const CartText = styled.span`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  color: #f1f1f2;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CartSubText = styled.span`
  font-weight: 400;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  color: #f1f1f2;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CartTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-right: 24px;
`;

export const CartIconWrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 4px 8px 0 24px;
  color: #f1f1f2;
`;
