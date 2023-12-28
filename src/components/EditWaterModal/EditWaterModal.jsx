import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
// import { editWaterThunk, getTodayThunk } from "../../redux/Water/WaterThunk";
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
} from "../AddWaterModal/AddWaterModal.styled";
import {
  EnteredText,
  SvgGlass,
  TimeValue,
  WaterEditContainer,
} from "./EditWaterModal.styled";

const EditWaterModal = ({ data }) => {
  const [counterValue, setCounterValue] = useState(data.amount);
  const [startDate, setStartDate] = useState(new Date(data.time));

  const dispatch = useDispatch();

  const handleUpdate = (evt) => {
    const { name } = evt.currentTarget;
    switch (name) {
      case "decrement":
        setCounterValue((state) => state - 50);
        break;
      case "increment":
        setCounterValue((state) => state + 50);
        break;
      case "input":
        const value = Number(evt.target.value);
        const inputValue = Math.min(Math.max(value), 5000);
        setCounterValue(inputValue);
        break;
      default:
    }
  };

  const handleSave = async (evt) => {
    evt.preventDefault();
    if (counterValue === 0) {
      Notiflix.Notify.warning("Please enter a non-zero value for water.");
      return;
    }
    if (counterValue < 0 || counterValue === "") {
      Notiflix.Notify.warning("Please enter a valid positive value for water.");
      return;
    }
    const newWaterParams = { amount: counterValue, time: startDate };

    // dispatch(editWaterThunk({ newWaterParams, _id: data._id }))
    //   .then(() => {
    //     Notiflix.Notify.success("Water value updated successfully!");
    //     dispatch(getTodayThunk());
    //   })
    //   .catch((error) => {
    //     Notiflix.Notify.failure(
    //       `Failed to update water value: ${error.message}`
    //     );
    //   });
  };

  return (
    <>
      <ValueText>Correct entered data:</ValueText>
      <WaterEditContainer>
        <SvgGlass />
        <EnteredText>{data.amount} ml</EnteredText>
        <TimeValue>
          {new Date(data.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </TimeValue>
      </WaterEditContainer>
      <AmountText>Amount of water:</AmountText>
      <BtnWrapper>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={counterValue === 0}
        >
          <StyledDecrementIcon aria-label="decrement_button" />
        </button>
        <span>{counterValue}ml</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <StyledIncrementIcon aria-label="increment_button" />
        </button>
      </BtnWrapper>
      <FormStyled>
        <label>
          Recording time:
          <StyledDateWrapper>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={5}
              dateFormat="HH:mm"
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
            value={counterValue}
            onChange={(evt) => {
              if (
                (evt.nativeEvent.inputType === "deleteContentBackward" ||
                  evt.nativeEvent.inputType === "deleteContentForward") &&
                counterValue === 0
              ) {
                setCounterValue("");
              } else {
                handleUpdate(evt);
              }
            }}
            min="1"
            max="5000"
          />
        </label>
        <BtnSaveWrapper>
          <p>{counterValue}ml</p>
          <button onClick={handleSave}>Save</button>
        </BtnSaveWrapper>
      </FormStyled>
    </>
  );
};

export default EditWaterModal;
