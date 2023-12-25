import styled from "styled-components";
// container styles
export const Container = styled.div `
  margin-left: auto;
  margin-right: auto;
/* Mobile responsive container */
/* @media screen and (min-width: 320px) {
  width: calc(280px + 2 * 20px);  
  padding-left: 20px;
  padding-right: 20px;
} */
/* Tablet adaptive container */
/* @media screen and (min-width: 768px) {
    width: calc(704px + 2 * 32px);
    padding-left: 32px;
    padding-right: 32px;    */
  /* } */
  /* Desktop adaptive container */
/* @media screen and (min-width: 1440px) {
    width: calc(1289px + 39px + 112px);    
    padding-right: 112px; 
    padding-bottom: 40px;
  } */
`


export const Calendar = styled.div `
background-color: #ECF2FF;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
/* box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3); */
@media screen and (min-width: 320px) {
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom:24px;
    position:relative;
   }
/* Tablet adaptive container */
@media screen and (min-width: 768px) {
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom:32px;    
  }
  /* Desktop adaptive container */
@media screen and (min-width: 1440px) {  
  width: calc(544px + 2 * 24px);
  padding-left: 24px;
  padding-right: 24px;  
  margin-left: auto; 
  }`
  



// Heder styles
export const Heder = styled.div `
display: flex;
margin-bottom: 16px;
justify-content: space-between;
align-items:baseline;
`
export const Title = styled.div `
color: #2F2F2F;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`
export const Pagination = styled.div `
display: flex;
gap: 12px;
align-items: center;
`

export const PaginationText = styled.p `
color: #407BFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`
export const PaginationBTN = styled.button `
color:#407BFF;
border: none;
background-color: inherit;
`



// List styles
export const CalendarList = styled.ul `
display: flex;
flex-wrap: wrap;
column-gap: 26px;
row-gap: 16px;
@media screen and (min-width: 768px) {
column-gap: 34px;
row-gap: 20px;
}
@media screen and (min-width: 1440px) {
column-gap: 22px;
row-gap: 20px;
}
`