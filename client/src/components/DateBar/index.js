import React from "react";
import {
  DateBarWrapper,
  DateItem,
  DateItemDisabled,
  DateText,
  DayText,
  SelectedDate,
} from "./DateBarElements";
const DateBar = () => {
  return (
    <DateBarWrapper>
      <DateItem>
        <DayText>SEN</DayText>
        <DateText>10</DateText>
      </DateItem>
      <DateItem>
        <DayText>SEL</DayText>
        <DateText>11</DateText>
      </DateItem>
      <DateItem>
        <DayText>RAB</DayText>
        <DateText>12</DateText>
      </DateItem>
      <SelectedDate>
        <DayText>KAM</DayText>
        <DateText>13</DateText>
      </SelectedDate>
      <DateItem>
        <DayText>JUM</DayText>
        <DateText>14</DateText>
      </DateItem>
      <DateItemDisabled>
        <DayText>SAB</DayText>
        <DateText>15</DateText>
      </DateItemDisabled>
      <DateItemDisabled>
        <DayText>MIN</DayText>
        <DateText>16</DateText>
      </DateItemDisabled>
    </DateBarWrapper>
  );
};

export default DateBar;
