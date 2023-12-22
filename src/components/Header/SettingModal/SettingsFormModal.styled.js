import styled from 'styled-components';
import { Formik, Form, ErrorMessage, Field } from 'formik';

export const TopicGender = styled.label`
  margin-bottom: 12px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.111;
`;

export const Password = styled.label`
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;

export const LabelGender = styled.label`
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;

export const GenderWrapper = styled.span`
  margin-right: 24px;
`;

export const Gender = styled.span`
  margin-left: 8px;
`;

export const Base = styled(Formik)``;

export const FormUser = styled(Form)``;

export const LabelForm = styled.label``;

export const LabelsPassword = styled.label``;

export const ErrMessage = styled(ErrorMessage)``;

export const FieldForm = styled(Field)``;

export const SaveBtn = styled.button``;
