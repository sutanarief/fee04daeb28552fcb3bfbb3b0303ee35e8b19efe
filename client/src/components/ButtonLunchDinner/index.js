import React from "react";
import {
  ButtonWrapper,
  RadioButton,
  InputLabel,
} from "./ButtonLunchDinnerElements";

const ButtonLunchDinner = () => {
  return (
    <>
      <ButtonWrapper>
        <RadioButton defaultChecked type="radio" name="time" id="Lunch" />
        <InputLabel
          htmlFor="Lunch"
          id="LunchLabel"
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        >
          Lunch
        </InputLabel>
        <RadioButton type="radio" name="time" id="Dinner" />
        <InputLabel
          htmlFor="Dinner"
          id="DinnerLabel"
          style={{
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          Dinner
        </InputLabel>
      </ButtonWrapper>
    </>
  );
};

export default ButtonLunchDinner;
