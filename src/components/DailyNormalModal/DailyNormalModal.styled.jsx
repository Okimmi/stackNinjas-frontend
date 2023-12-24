import styled from "styled-components";

export const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 26;
  font-weight: 700;
  line-height: 1.23; // 32/26=1.23;
  text-align: left;
  margin-bottom: 24px;
`;

export const BoxFormula = styled.div`
`;
export const ListFormula = styled.ul`
  margin-bottom: 12px;
`;
export const ItemFormula = styled.li`
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
  border: 1px solid ${props => props.theme.colors.secondary6};
  border-radius: 10px;
  color: ${props => props.theme.colors.secondary7};
`

export const PSText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  vertical-align: top;
  height: auto;
`;

export const MarkPSText =  styled.span`
  color: ${props => props.theme.colors.primeryBlue};
`;