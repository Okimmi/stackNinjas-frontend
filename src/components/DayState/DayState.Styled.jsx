import styled from "styled-components";
const getBorder = props => {
  if ((!!props.dailyProgress?parseInt(props.dailyProgress) : 101) < 100) {
    return props.theme.colors.secondary5; 
  } else {return props.theme.colors.primeryWhite}
}
export const CalendarItem = styled.div `
display:flex;
flex-direction: column;
cursor: pointer;
/* Tablet adaptive container */
@media screen and (min-width: 768px) {
  position: relative;
}
`

export const DateWrapper = styled.div `

display:flex;
width: 32px;
height: 32px;
background-color: ${(props) =>props.theme.colors.primeryWhite};
border-radius:20px;
border: 1px solid ${getBorder};
justify-content: center;
align-items: center;
margin-bottom: 4px;
@media screen and (min-width: 768px) {
width: 34px;
height: 34px;
}
`
export const Day = styled.p`
color: ${(props) =>props.theme.colors.primeryBlack};;
font-size: 14px;
font-weight: 400;
line-height: 1.29;
/* Tablet adaptive container */
@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 1.25;
}`
export const DailyProgress = styled.p`
color: ${(props) =>props.theme.colors.secondary4};;
font-size: 10px;
font-weight: 400;
line-height: 1.6;
text-align: center;
@media screen and (min-width: 768px) {
  font-size: 13px;
  line-height: 1.54;
}
@media screen and (min-width: 1440px) {
  font-size: 12px;
  line-height: 1.5;
}
`