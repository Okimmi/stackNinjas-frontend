import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackgroundImg,
  BackgroundImg320,
  BottleMobil,
  BottleStyled,
  BottleTablet,
  ErMsg,
  FormBtnStyled,
  SightInContainer,
  SightUp,
  StyledBtn,
  StyledField,
  StyledForm,
  Styledlabel,
} from 'components/AuthForm/AuthForm.styled';
import { useNavigate } from 'react-router-dom';
import { newUserPass } from '../../redux/auth/operations';
import { useEffect, useState } from 'react';
import { selectIsError } from '../../redux/auth/selectors';
import iconeye from '../../images/AuthForm/show_icon.svg';
import hidepas from '../../images/AuthForm/hide_icon.svg';
import Notiflix from 'notiflix';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(48, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter')
    .required('Required'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const RestorePass = () => {
  const error = useSelector(selectIsError);
  const [showPassword, setShowPassword] = useState(false);
  const [sendForm, setSendForm] = useState(false);

  const dispatch = useDispatch();
  const [screenSize, setScreenSize] = useState({
    isDesctopScreen: typeof window !== 'undefined' && window.innerWidth >= 1440,
    isTabletScreen: window.innerWidth >= 768 && window.innerWidth < 1440,
    isMobileScreen: window.innerWidth < 768,
  });
  const navigate = useNavigate();

  const tokenMatch = window.location.pathname.match(/\/forgot-password\/(.+)$/);
  const token = tokenMatch ? tokenMatch[1] : null;

  useEffect(() => {
    if (sendForm && error) {
      Notiflix.Notify.failure(`${error}`);
    } else if (sendForm && !error) {
      Notiflix.Notify.success(
        'Your password has been successfully updated. You can now log in with your new password.'
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
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, action) => {
            action.resetForm();
            await dispatch(
              newUserPass({
                password: values.password,
                token,
              })
            );
            setSendForm(true);
          }}
        >
          <StyledForm>
            <h2>Enter New Password</h2>
            <Styledlabel htmlFor="password">
              Enter your password
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

            <Styledlabel htmlFor="passwordRepeat">
              Repeat password
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
              id="passwordRepeat"
              type={showPassword ? 'text' : 'password'}
              name="passwordRepeat"
              placeholder="Repeat password"
              title="passwordRepeat"
            />

            <ErMsg component="span" name="passwordRepeat" />
            <FormBtnStyled type="submit">Send</FormBtnStyled>
            <SightUp onClick={() => navigate('/signup')}>Sign up</SightUp>
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
