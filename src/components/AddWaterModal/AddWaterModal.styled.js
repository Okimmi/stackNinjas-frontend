import styled from "styled-components";
import { Notify } from "notiflix";
import { createGlobalStyle } from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as IncrementIcon } from "../../icons/pluss.svg";
import { ReactComponent as DecrementIcon } from "../../icons/minus.svg";

export const StyledIncrementIcon = styled(IncrementIcon)`
  stroke: blue;
`;

export const StyledDecrementIcon = styled(DecrementIcon)`
  stroke: blue;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h3 {
    color: black;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }

  button {
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  margin-bottom: 24px;

  button {
    width: 44px;
    height: 44px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 30px;
    border: 1px solid #407BFF;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
    cursor: pointer;
  }

  span {
    width: 92px;
    height: 36px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    background: #d7e3ff;
    color: #407BFF;

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const ValueText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
  color: black;
`;

export const AmountText = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  label:nth-child(2) {
    color: black;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  input {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 24px;
    appearance: none;
    padding: 12px 10px;
  
    border: 1px solid #407BFF;
    border-radius: 6px;
  
    color: #92b1f6;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0em;
    text-align: left;
  }


  @media screen and (min-width: 768px) {
    input,
    select {
      width: 100%;
    }
  }
`;

export const BtnSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    color: #407BFF;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: #407BFF;
    color: #FFFFFF;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`;

Notify.init({
  timeout: 2000,
  fontFamily: "Roboto",
  warning: {
    background: "#ff9d43",
    timeout: 8000,
    textColor: "#ffffff",
    childClassName: "notiflix-notify-warning",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-exclamation-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(238,191,49,0.2)",
  },
});

export const StyledDateWrapper = styled.div`
  position: relative;
`;

export const TimeGlobalStyles = createGlobalStyle`
  .react-datepicker-wrapper {
    position: relative;
     width: 100%;
  }

.react-datepicker__triangle {
    visibility: hidden;
  }

.react-datepicker.react-datepicker--time-only {
    position: absolute;
    font-size: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-1%, -10%);
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d7e3ff;
    font-family: Roboto;
    border-radius: 10px;
    border:1px solid #9ebbff;
    color:#407BFF
  }

.react-datepicker__header.react-datepicker__header--time.react-datepicker__header--time--only{
  background-color:#407BFF;
  color:#FFFFFF;
}
.react-datepicker__header .react-datepicker-time__header{
  color:#FFFFFF;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar {
  width: 12px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-track {
  background-color: #d7e3ff
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border-radius: 6px;
    background: #FFFFFF;
    border: solid 1px #407BFF;
    height: 20px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{
  background-color: #407BFF !important;
    color: #FFFFFF;
    font-weight: bold;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{
      padding-left: 16px;
      border-left: 2px solid #ff9d43;
      transition: all 0.3s ease;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{
  transition: all 0.5s ease;
}
  `;
