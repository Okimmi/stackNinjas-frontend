import styled from "styled-components";
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
background-color: #FFFFFF;
border-radius:20px;
border: 1px;
justify-content: center;
align-items: center;
margin-bottom: 4px;
@media screen and (min-width: 768px) {
width: 34px;
height: 34px;
}
`
export const Day = styled.p`
color: #2F2F2F;
font-size: 14px;
font-weight: 400;
line-height: 1.29;
/* Tablet adaptive container */
@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 1.25;
}`
export const DailyProgress = styled.p`
color: #9EBBFF;
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