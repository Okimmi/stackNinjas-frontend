import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackgroundImg,
  BackgroundImg320,
  BottleMobil,
  BottleStyled,
  BottleTablet,
  BottomBtnBox,
  ErMsg,
  FormBtnStyled,
  GoogleBtn,
  SightInContainer,
  SightUp,
  StyledBtn,
  StyledField,
  StyledForm,
  Styledlabel,
} from './AuthForm.styled';
import { useNavigate } from 'react-router-dom';
import { GooglelogIn, logIn } from '../../redux/auth/operations';
import iconeye from '../../images/AuthForm/show_icon.svg';
import hidepas from '../../images/AuthForm/hide_icon.svg';
import google from '../../images/AuthForm/google-icon.png';
import { useEffect, useState } from 'react';
import { selectIsError } from '../../redux/auth/selectors';
import Notiflix from 'notiflix';



const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .matches(
      /^[-?\w.?%?]+@\w+.{1}\w{2,4}$/,
      'Enter a valid email. For example user@gmail.com'
    )
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(48, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter')
    .required('Required'),
});

export const AuthForm = () => {
  const error = useSelector(selectIsError);
  const [showPassword, setShowPassword] = useState(false);
  const [sendForm, setSendForm] = useState(false);

  const [screenSize, setScreenSize] = useState({
    isDesctopScreen: typeof window !== 'undefined' && window.innerWidth >= 1440,
    isTabletScreen: window.innerWidth >= 768 && window.innerWidth < 1440,
    isMobileScreen: window.innerWidth >= 320 && window.innerWidth < 768,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleAuth = () => {
    dispatch(GooglelogIn());
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({
        isDesctopScreen: window.innerWidth >= 1440,
        isTabletScreen: window.innerWidth >= 768 && window.innerWidth < 1440,
        isMobileScreen: window.innerWidth >= 320 && window.innerWidth < 768,
      });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [screenSize]);

  useEffect(() => {
    if (sendForm && error) {
      Notiflix.Notify.failure(`${error}`);
    }

    setSendForm(false);
  }, [error, sendForm]);

  const handleSubmit = async (values, action) => {
    await dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    action.resetForm();
    setSendForm(true);
  };

  return (
    <>
      <SightInContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <h2>Sign In</h2>
            <Styledlabel htmlFor="email">Enter your email</Styledlabel>
            <StyledField id="email" name="email" placeholder="E-mail" />
            <ErMsg component="span" name="email" />

            <Styledlabel htmlFor="password">
              Enter your password{' '}
              <StyledBtn onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <img
                    src={iconeye}
                    width={18}
                    height={18}
                    alt="Hide Password"
                  />
                ) : (
                  <img
                    src={hidepas}
                    IconEye
                    width={18}
                    height={18}
                    alt="Show Password"
                  />
                )}
              </StyledBtn>
            </Styledlabel>
            <StyledField
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              title="password"
            />

            <ErMsg component="span" name="password" />
            <FormBtnStyled type="submit">Sign In</FormBtnStyled>
            <GoogleBtn type='button' onClick={handleGoogleAuth}>
            <img src={google} alt="Google Icon" width={20} height={20}/>
              Enter with Google</GoogleBtn>
            <BottomBtnBox>
              <SightUp onClick={() => navigate('/signup')}>Sign up</SightUp>
              <SightUp onClick={() => navigate('/change-password')}>
                Forgot Password
              </SightUp>
            </BottomBtnBox>
          </StyledForm>
        </Formik>
        {screenSize.isDesctopScreen && <BottleStyled />}
        {screenSize.isTabletScreen && <BottleTablet />}
        {screenSize.isMobileScreen && <BottleMobil />}
      </SightInContainer>
      {screenSize.isMobileScreen ? <BackgroundImg320 /> : <BackgroundImg />}
    </>
  );
};
