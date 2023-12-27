import styled from "styled-components";
import { Field } from 'formik';

export const Title = styled.h2`
  font-size: 26;
  font-weight: 700;
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ItemFormula = styled.li`
  margin-right: 24px;
  margin-bottom: 16px;
`;
export const Formula = styled.p`
  color:  ${props => props.theme.colors.primeryBlack};
`;

export const FormulaColorText = styled.span`
  color: ${props => props.theme.colors.primeryBlue};
`;

export const BoxTextPostScriptum = styled.div`
  padding: 10px;
  margin-bottom: 24px;
  border: 1px solid ${props => props.theme.colors.secondary6};
  border-radius: 10px;
  color: ${props => props.theme.colors.secondary7};
`

export const PSText = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  vertical-align: top;
  height: auto;
`;

export const MarkPSText =  styled.span`
  color: ${props => props.theme.colors.primeryBlue};
`;

export const SubTitle =  styled.h3`
  font-weight: 700;
  font-size: 18px;
  initial-letter: 1.11; // 20/18=1.11
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
`;
export const Text =  styled.p`
  display: block;
  width: 190px;
  font-size: 16px;
  font-weight: 400;
  initial-letter: 1.25; // 20/16=1.25
  text-align: left;
  color: ${props => props.theme.colors.primeryBlack};
`;
export const RequiredText =  styled.p`
  display: block;
  font-size: 18px;
  font-weight: 700;
  initial-letter: 1.33; // 24/18=1.33
  text-align: center;
  color: ${props => props.theme.colors.primeryBlue};
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
`
export const ButtonSave = styled.button`
  display: block;
  width: 256px;
  height: 36px;
  padding: 8px 30px;
  border-radius: 10px;
  color: ${props => props.theme.colors.primeryWhite};
  background-color: ${props => props.theme.colors.primeryBlue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  cursor: pointer;
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1440px) {
  
  }

  &:hover, &:focus {
    box-shadow: 0px 4px 14px 0px  ${props => props.theme.colors.primeryBlue};
    transition: opacity 0.3s ease;
  }
  &:active{
    box-shadow: none;
  }
`;

