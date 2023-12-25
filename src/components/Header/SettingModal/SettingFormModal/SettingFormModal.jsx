import * as yup from 'yup';
// import { useFormik } from 'formik';

import { useState } from 'react';
import {
  Base,
  Container,
  ErrMessage,
  FieldForm,
  FormUser,
  Gender,
  GenderWrapper,
  NameWrapper,
  Password,
  RadioField,
  RadioWrapper,
  SaveBtn,
  TopicGender,
  Wrapper,
} from './SettingsFormModal.styled';
import { EyeIcon, HideIcon, Title, ToggleIcon } from '../SettingModal.styled';

const replacePasswordSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers'),

  email: yup
    .string()
    .email('Invalid email format')
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/),

  outdatedPassword: yup.string(),
  // .required('Please Enter your outdated password password'),

  newPassword: yup
    .string()
    .min(8, 'Too short')
    .max(48, 'Too long')
    .required('Please Enter your password')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter'),

  repeadPassword: yup
    .string()
    // .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const FormModal = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    // const {
    //   name,
    //   email,
    //   outdatedPassword,
    //   newPassword,
    //   repeadPassword,
    //   picked,
    // } = values;

    console.log(values);
    resetForm();
  };

  return (
    <>
      <Base
        initialValues={{
          picked: '',
          gender: '',
          name: '',
          email: '',
          outdatedPassword: '',
          newPassword: '',
          repeadPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={replacePasswordSchema}
      >
        <FormUser>
          <Wrapper>
            <TopicGender>Your gender identity</TopicGender>
            <RadioWrapper>
              <GenderWrapper>
                <RadioField type="radio" name="picked" value="femail" />
                <Gender>Girl</Gender>
              </GenderWrapper>
              <RadioField type="radio" name="picked" value="mail" />
              <Gender>Man</Gender>
            </RadioWrapper>

            <Title>Your name</Title>

            <NameWrapper>
              <FieldForm
                type="text"
                name="name"
                placeholder="David"
                // style={
                //   formik.errors.David && formik.touched.myField
                //     ? { borderColor: 'red' }
                //     : null
                // }
                style={{ color: '#407BFF' }}
              />{' '}
            </NameWrapper>

            <Title>Your email</Title>
            <FieldForm
              id="email"
              name="email"
              placeholder="david01@gmail.com"
              title="email"
              autoComplete="on"
            />
          </Wrapper>

          <Wrapper>
            <TopicGender>Password</TopicGender>
            <Password htmlFor="">Outdated password:</Password>
            <Container>
              <FieldForm
                id="outdatedPassword"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                title="outdatedPassword"
                autoComplete="on"
              />

              <ToggleIcon onClick={toggle}>
                {showPassword ? <EyeIcon /> : <HideIcon />}
              </ToggleIcon>

              <ErrMessage name="password" component="p" />
            </Container>

            <Password htmlFor="">New password:</Password>

            <Container>
              <FieldForm
                name="newPassword"
                id="newPassword"
                type={showPassword ? 'text' : 'password'}
                title="newPassword"
                placeholder="Password"
                autoComplete="on"
              />
              <ErrMessage name="newPassword" component="p" />
              <ToggleIcon onClick={toggle}>
                {showPassword ? <EyeIcon /> : <HideIcon />}
              </ToggleIcon>
            </Container>

            <Password htmlFor="repeadPassword">Repeat new password:</Password>

            <Container>
              <FieldForm
                name="repeadPassword"
                id="repeadPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="on"
              />
              <ToggleIcon onClick={toggle}>
                {showPassword ? <EyeIcon /> : <HideIcon />}
              </ToggleIcon>

              <ErrMessage name="repeadPassword" component="p" />
            </Container>
          </Wrapper>
          <SaveBtn type="submit">Save</SaveBtn>
        </FormUser>
      </Base>
    </>
  );
};
