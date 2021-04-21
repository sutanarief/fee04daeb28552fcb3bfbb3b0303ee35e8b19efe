import styled from "styled-components";

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  height: 80%;
  width: 50%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80%;
    bottom: 0;
    position: fixed;
    border-radius: 10px 10px 0 0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

export const ModalText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0px 16px 0 16px;
  color: #424749;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin: 24px 16px 24px 16px;
  border: 2px solid #f1f1f2;
`;

export const TextInput = styled.input`
  flex: 1 0;
  width: 200px;
  height: 40px;
  margin: 8px;
  border: 0;
  cursor: pointer;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const SuggestionLocationWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin: 0 80px 24px 16px;
  width: 100%;
`;

export const Suggestion = styled.div`
  margin-right: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f2;
  }
`;

export const SuggestionIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 16px;
  background-color: #e2e2e4;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuggestionTextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 2px solid #f1f1f2;
  padding: 8px 0 8px 8px;
`;

export const MainText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #424749;
`;

export const SubText = styled.div`
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  color: #6e7679;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CloseModalButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #424749;
  margin: 8px;
  z-index: 10px;
`;
