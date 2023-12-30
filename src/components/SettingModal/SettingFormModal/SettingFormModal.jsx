import * as yup from 'yup';
import axios from 'axios';

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
import { BASE_URL } from '../SettingUploadPhoto/SettingUploadPhoto';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { refreshUser } from '../../../redux/auth/operations';

import { ToastContainer, toast } from 'react-toastify';

const updateUserInfoSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers'),

  email: yup
    .string()
    .email('Invalid email format')
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/),

  passwordOutdated: yup.string(),

  password: yup
    .string()
    .test({
      name: 'password',
      test: function (value) {
        const passwordOutdated = this.parent.passwordOutdated;
        return (
          !(passwordOutdated && passwordOutdated.trim().length > 0) ||
          (value && value.trim().length > 0)
        );
      },
      message: 'New password is required',
    })
    .min(8, 'Too short')
    .max(48, 'Too long')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter'),

  passwordRepeat: yup
    .string()
    .test({
      name: 'passwordRepeat',
      test: function (value) {
        const password = this.parent.password;
        return (
          !(password && password.trim().length > 0) ||
          (value && value.trim().length > 0)
        );
      },
      message: 'Repeat password is required',
    })
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const FormModal = ({ onCloseModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const filledFields = Object.fromEntries(
      Object.entries(values).filter(
        ([key, value]) => value !== '' && value !== undefined
      )
    );

    const hasChanges = Object.entries(filledFields).some(
      ([key, value]) => value !== user[key]
    );

    if (!hasChanges) {
      toast.warning('No changes made. Profile data remains the same.');
      return;
    }

    try {
      const response = await axios.put(
        `${BASE_URL}/api/auth/profile`,
        filledFields,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        dispatch(refreshUser());
        onCloseModal();
        resetForm();
        toast.success('Your profile data was successfully updated');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Base
        initialValues={{
          gender: '' || user.gender,
          name: '',
          email: '',
          passwordOutdated: '',
          password: '',
          passwordRepeat: '',
        }}
        validationSchema={updateUserInfoSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <FormUser>
            <Wrapper>
              <TopicGender>Your gender identity</TopicGender>
              <RadioWrapper>
                <GenderWrapper>
                  <RadioField
                    type="radio"
                    name="gender"
                    value="girl"
                    checked={values.gender === 'girl'}
                  />

                  <Gender>Girl</Gender>
                </GenderWrapper>
                <RadioField
                  type="radio"
                  name="gender"
                  value="man"
                  checked={values.gender === 'man'}
                />
                <Gender>Man</Gender>
              </RadioWrapper>

              <Title>Your name</Title>

              <NameWrapper>
                <FieldForm
                  type="text"
                  name="name"
                  placeholder={user.name || 'Enter your name'}
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
                placeholder={user.email || 'Email'}
                title="email"
                autoComplete="on"
              />
            </Wrapper>

            <Wrapper>
              <TopicGender>Password</TopicGender>
              <Password htmlFor="passwordOutdated">Outdated password:</Password>
              <Container>
                <FieldForm
                  id="passwordOutdated"
                  name="passwordOutdated"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={'Password'}
                  title="passwordOutdated"
                  autoComplete="on"
                />

                <ToggleIcon onClick={toggle}>
                  {showPassword ? <EyeIcon /> : <HideIcon />}
                </ToggleIcon>
                <ErrMessage name="passwordOutdated" component="p" />
              </Container>

              <Password htmlFor="password">New password:</Password>

              <Container>
                <FieldForm
                  name="password"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  title="Password"
                  placeholder="Password"
                  autoComplete="on"
                />

                <ToggleIcon onClick={toggle}>
                  {showPassword ? <EyeIcon /> : <HideIcon />}
                </ToggleIcon>
                <ErrMessage name="password" component="p" />
              </Container>

              <Password htmlFor="passwordRepeat">Repeat new password:</Password>

              <Container>
                <FieldForm
                  name="passwordRepeat"
                  id="passwordRepeat"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  autoComplete="on"
                />
                <ToggleIcon onClick={toggle}>
                  {showPassword ? <EyeIcon /> : <HideIcon />}
                </ToggleIcon>

                <ErrMessage name="passwordRepeat" component="p" />
              </Container>
            </Wrapper>
            <SaveBtn type="submit">Save</SaveBtn>
          </FormUser>
        )}
      </Base>
      <ToastContainer />
    </>
  );
};
