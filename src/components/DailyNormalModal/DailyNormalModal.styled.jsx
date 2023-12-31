import styled from "styled-components";
import { Field } from 'formik';

export const ContainerForModal = styled.div`
  /* outline: 1px solid red; */

  /* Mobile responsive container */
  @media screen and (max-width: 320px) {
    width: 256px; // 280px-2*12 = 256
    min-width: 256px;
  }

  /* Mobile adaptive container */
  @media screen and (min-width: 320px) {
    width: 256px; // 280px-2*12 = 256
  }

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    width: 656px; // 704px - 2*24 = 656;
  }

  /* Desktop adaptive container */
  @media screen and (min-width: 1440px) {
    width: 544px; // 592px - 2*24 = 544;
  }
`

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23; // 32/26=1.23;
  text-align: left;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.primeryBlack};
`;

export const BoxFormula = styled.div`
`;
export const ListFormula = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ItemFormula = styled.li`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  
  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    margin-right: 24px;
    margin-bottom: 0;
  }
`;
export const Formula = styled.p`
  font-size: 16px;
  line-height: 1.25;
  color:  ${props => props.theme.colors.primeryBlack};
`;

export const FormulaColorText = styled.span`
  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.colors.primeryBlue};
`;

export const BoxTextPostScriptum = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 24px;
  border: 1px solid ${props => props.theme.colors.secondary6};
  border-radius: 10px;
  color: ${props => props.theme.colors.secondary7};
`

export const PSText = styled.p`
  font-size: 12px;
  line-height: 1.33;  // 16/12=1.33
  text-align: left;
  vertical-align: top;
  height: auto;
`;

export const MarkPSText =  styled.span`
  color: ${props => props.theme.colors.primeryBlue};
`;

export const SubTitle =  styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;  // 20/18=1.11 */
  text-align: left;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.primeryBlack};
`;

export const BoxRate =  styled.div`
  margin-bottom: 24px;
`;

export const FormRate =  styled.div`
`;
export const BoxGender =  styled.div`
  margin-bottom: 16px;
`;

export const LabelGender = styled.label`
  line-height: 1.25;  // 20/16=1.25 */
  margin-right: 24px;
`;

export const FieldGenger = styled(Field)`
  margin-right: 6px;
`

export const BoxWeight =  styled.div`
  margin-bottom: 16px;
`;
export const BoxTime =  styled.div`
  margin-bottom: 16px;
`;


export const BoxRequiredLitresPerDay =  styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  margin-bottom: ${props => props.color !== 'blue' ? '3rem': '0' };

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const TextLitresPerDay =  styled.p`
  display: block;
  width: 190px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;  // 20/16=1.25 */
  text-align: left;
  color: ${props => props.theme.colors.primeryBlack};

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    width: 328px;
  }
`;

export const CalcBox = styled.div`
  position: relative;
`;
export const RequiredText =  styled.p`
  display: block;
  position: relative;
  padding-left: 6px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;  // 24/18=1.33

  color: ${props => props.color === 'blue' ?  props.theme.colors.primeryBlue : props.theme.colors.secondary3};
`;
export const ErrorCalcFieldText = styled.div`
  /* display: block; */
  position: absolute;
  bottom: calc(-3rem + 5px);
  left: 0;
  min-width: 70px;
  font-size: 0.75rem;
  line-height: 1.25;
  padding-left: 6px;

  color:  ${props => props.theme.colors.secondary3};

    /* Tablet adaptive container */
    @media screen and (min-width: 768px) {
    bottom: -1rem;
    min-width: 150px;
  }
`;

export const BoxWaterDrink =  styled.div`
  margin-bottom: 24px;
`;

export const BoxForm = styled.div`
  margin: 0 auto;
`
export const BoxButton = styled.div`
  display: flex;
  justify-content: center;

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    justify-content: right;
  }

`
export const ButtonSave = styled.button`
  display: block;
  width: 100%;
  height: 36px;
  padding: 8px 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33; // 24/18=1.33

  color: ${props => props.theme.colors.primeryWhite};
  background-color: ${props => props.theme.colors.primeryBlue};
  box-shadow: 0px 4px 8px rgba(196, 209, 236, 0.34);  cursor: pointer;

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
  }

  &:hover, &:focus {
    box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.54);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: opacity 0.3s ease;
  }
  &:active{
    box-shadow: none;
    text-shadow: none;
  }
`;

