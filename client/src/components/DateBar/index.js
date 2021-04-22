import React from "react";
import {
  DateBarWrapper,
  DateItem,
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
      <DateItem>
        <DayText>SAB</DayText>
        <DateText>15</DateText>
      </DateItem>
      <DateItem>
        <DayText>MIN</DayText>
        <DateText>16</DateText>
      </DateItem>
    </DateBarWrapper>
  );
};

export default DateBar;
