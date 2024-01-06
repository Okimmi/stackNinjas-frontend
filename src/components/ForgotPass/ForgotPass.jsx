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
  SightInContainer,
  SightUp,
  StyledField,
  StyledForm,
  Styledlabel,
} from 'components/AuthForm/AuthForm.styled';
import { useNavigate } from 'react-router-dom';
import { restoreUserPass } from '../../redux/auth/operations';
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
});

export const ForgotPass = () => {
  const error = useSelector(selectIsError);
  const [sendForm, setSendForm] = useState(false);

  const dispatch = useDispatch();
  const [screenSize, setScreenSize] = useState({
    isDesctopScreen: typeof window !== 'undefined' && window.innerWidth >= 1440,
    isTabletScreen: window.innerWidth >= 768 && window.innerWidth < 1440,
    isMobileScreen: window.innerWidth < 768,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (sendForm && error) {
      Notiflix.Notify.failure(`${error}`);
    } else if (sendForm && !error) {
      Notiflix.Notify.success(
        'Password reset link sent to your email. Check your inbox.'
      );
      setTimeout(() => {
        if (!error) {
          navigate('/signin');
        }
      }, 3000);
    }

    setSendForm(false);
  }, [error, sendForm, navigate]);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({
        isDesctopScreen: window.innerWidth >= 1440,
        isTabletScreen: window.innerWidth >= 768 && window.innerWidth < 1440,
        isMobileScreen: window.innerWidth < 768,
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
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, action) => {
            action.resetForm();
            await dispatch(
              restoreUserPass({
                email: values.email,
              })
            );
            setSendForm(true);
          }}
        >
          <StyledForm>
            <h2>Fogot Password?</h2>
            <Styledlabel htmlFor="email">Enter your email</Styledlabel>
            <StyledField id="email" name="email" placeholder="E-mail" />
            <ErMsg component="span" name="email" />

            <ErMsg component="span" name="password" />
            <FormBtnStyled type="submit">Send</FormBtnStyled>
            <BottomBtnBox>
              <SightUp onClick={() => navigate('/signup')}>Sign up</SightUp>
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
