import * as yup from 'yup';

import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectUser } from '../../../../redux/auth/selectors';
import axios from 'axios';
import { BASE_URL } from '../SettingUploadPhoto/SettingUploadPhoto';
import { refreshUser } from '../../../../redux/auth/operations';
import { ToastContainer, toast } from 'react-toastify';

const replacePasswordSchema = yup.object().shape({
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
    .min(8, 'Too short')
    .max(48, 'Too long')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter')
    .required('Please Enter your password'),

  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const FormModal = ({ onCloseModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const user = useSelector(selectUser);
  const err = useSelector(selectIsError);
  const dispatch = useDispatch();

  const [userUpdate, setUserUpdate] = useState(user);

  useEffect(() => {
    toast.error(err);
  }, [err]);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/auth/profile`, values, {
        headers: { 'Content-Type': 'application/json' },
      });

      setUserUpdate(response.data);

      // if (response.status === 400) {
      //   toast.error('Password is wrong');
      // }

      toast.success('Your profile data was successfully updated');
      dispatch(refreshUser());
      onCloseModal();

      resetForm();
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
        validationSchema={replacePasswordSchema}
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
