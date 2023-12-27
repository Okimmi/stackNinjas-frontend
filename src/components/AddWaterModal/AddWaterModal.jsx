import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Notiflix from "notiflix";
// import { useDispatch } from "react-redux";

import {
  AmountText,
  BtnSaveWrapper,
  BtnWrapper,
  FormStyled,
  StyledDateWrapper,
  StyledDecrementIcon,
  StyledIncrementIcon,
  TimeGlobalStyles,
  ValueText,
} from "./AddWaterModal.styled";

const AddWaterModal = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(new Date());

  // const dispatch = useDispatch();

  const handleUpdate = (evt) => {
    const { name } = evt.currentTarget;

    switch (name) {
      case "decrement":
        setValue((state) => Math.max(state - 50, 0));
        break;
      case "increment":
        setValue((state) => Math.min(state + 50, 5000));
        break;
      case "input":
        const value = Number(evt.target.value);
        const inputValue = Math.min(Math.max(value), 5000);
        setValue(inputValue);
        break;
      default:
    }
  };

  const handleSave = async (evt) => {
    evt.preventDefault();
    if (value === 0) {
      Notiflix.Notify.warning("Please enter a non-zero value for water.");
      return;
    }
    if (value < 0 || value === "") {
      Notiflix.Notify.warning("Please enter a valid positive value for water.");
      return;
    }
    const newTime = new Date(time);
    const saveWater = { amount: value, time: newTime };

    // dispatch();
    // dispatch();
  };

  return (
    <>
      <ValueText>Choose a value:</ValueText>
      <AmountText>Amount of water:</AmountText>
      <BtnWrapper>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={value === 0}
        >
          <StyledDecrementIcon aria-label="decrement_button" />
        </button>
        <span>{value}ml</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <StyledIncrementIcon aria-label="increment_button" />
        </button>
      </BtnWrapper>
      <FormStyled>
        <label>
          Recording time:
          <StyledDateWrapper>
            <DatePicker
              selected={time}
              onChange={(date) => {
                setTime(date);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={5}
              dateFormat="HH:mm"
              timeFormat="HH:mm"
              minTime={new Date(2023, 1, 1, 0, 0)}
              maxTime={new Date()}
              timeZone="UTC"
            />
            <TimeGlobalStyles />
          </StyledDateWrapper>
        </label>
        <label>
          Enter the value of the water used:
          <input
            name="input"
            type="number"
            value={value}
            onChange={(evt) => {
              if (
                (evt.nativeEvent.inputType === "deleteContentBackward" ||
                  evt.nativeEvent.inputType === "deleteContentForward") &&
                value === 0
              ) {
                setValue("");
              } else {
                handleUpdate(evt);
              }
            }}
            min="1"
            max="5000"
          />
        </label>
        <BtnSaveWrapper>
          <p>{value}ml</p>
          <button onClick={handleSave}>Save</button>
        </BtnSaveWrapper>
      </FormStyled>
    </>
  );
};

export default AddWaterModal;
