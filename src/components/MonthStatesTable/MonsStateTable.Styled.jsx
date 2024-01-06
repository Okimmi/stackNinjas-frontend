import styled from "styled-components";
import { ReactComponent as BtnRight} from '../../images/month/BtnRight.svg';
const disableBTN = props=>{return props.disabled? "grey": props.theme.colors.primeryBlue}

// Heder styles
export const Heder = styled.div `
display: flex;
margin-bottom: 16px;
justify-content: space-between;
align-items:baseline;
margin-top: 24px;
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
align-content: baseline;
`


export const PaginationText = styled.p `
color:${(props) =>props.theme.colors.primeryBlue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 124px;
  text-align: center;
`
export const PaginationBTN = styled.button `
color: ${(props) =>props.theme.colors.primeryBlue};
border: none;
background-color: inherit;
padding: 0px;
cursor: pointer;
`
export const PaginationBtnRight = styled(BtnRight)`
  fill: ${disableBTN} ;
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