import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BackgroundImg,
  BackgroundImg320,
  BackgroundImg720,
  BottleMobil,
  BottleStyled,
  ErMsg,
  FormBtnStyled,
  SightInContainer,
  SightUp,
  StyledBtn,
  StyledField,
  StyledForm,
  Styledlabel,
} from './AuthForm.styled';
import { useNavigate } from 'react-router-dom';
import { logIn, refreshUser } from '../../redux/auth/operations';
import iconeye from '../../images/AuthForm/show_icon.svg';
import hidepas from '../../images/AuthForm/hide_icon.svg';
import { useEffect, useState } from 'react';
import { selectIsError, selectIsLoggedIn } from '../../redux/auth/selectors';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const error = useSelector(selectIsError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showPassword, setShowPassword] = useState(false);

  const [screenSize, setScreenSize] = useState({
    isDesctopScreen: typeof window !== 'undefined' && window.innerWidth >= 1440,
    isTabletScreen: window.innerWidth >= 768 && window.innerWidth <= 1439,
    isMobileScreen: window.innerWidth >= 320 && window.innerWidth <= 768,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isSubmitted) {
    toast.error(error);
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({
        isDesctopScreen: window.innerWidth >= 1440,
        isTabletScreen: window.innerWidth >= 768 && window.innerWidth <= 1440,
        isMobileScreen: window.innerWidth >= 320 && window.innerWidth <= 768,
      });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [screenSize]);

  return (
    <>
      <SightInContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, action) => {
            action.resetForm();
            dispatch(
              logIn({
                email: values.email,
                password: values.password,
              })
            );
            setIsSubmitted(true);
            if (isLoggedIn) {
              dispatch(refreshUser());
            }
          }}
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

            <SightUp onClick={() => navigate('/signup')}>Sight Up</SightUp>
          </StyledForm>
        </Formik>
        {screenSize.isDesctopScreen && <BottleStyled />}
        {screenSize.isTabletScreen && <BottleStyled />}
        {screenSize.isMobileScreen && <BottleMobil />}
      </SightInContainer>
      {screenSize.isDesctopScreen && <BackgroundImg />}
      {screenSize.isTabletScreen && <BackgroundImg720 />}
      {screenSize.isMobileScreen && <BackgroundImg320 />}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
