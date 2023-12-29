import styled from "styled-components";

// Heder styles
export const Heder = styled.div `
display: flex;
margin-bottom: 16px;
justify-content: space-between;
align-items:baseline;
`
export const Title = styled.div `
color: ${(props) =>props.theme.colors.primeryBlack};
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
color:${(props) =>props.theme.colors.primeryBlue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`
export const PaginationBTN = styled.button `
color:${(props) =>props.theme.colors.primeryBlue};
border: none;
background-color: inherit;
padding: 0px;
cursor: pointer;
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