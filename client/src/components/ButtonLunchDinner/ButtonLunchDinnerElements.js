import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const FormWrapper = styled.form`
  display: flex;
`;

export const RadioButton = styled.input`
  --webkit-appearance: none;
  --moz-appearance: none;
  appearance: none;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  width: 20%;
  text-align: center;
  cursor: pointer;
  padding: 8px;
  margin: 8px 0 8px 0;
  border: 2px solid #e2e2e4;
  color: #e2e4e4;
  font-weight: 600;
  box-sizing: border-box;

  ${RadioButton}:checked + & {
    background-color: #424749;
    border: 2px solid #424749;
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
    font-size: 16px;
  }

  -webkit-tap-highlight-color: transparent;
`;
