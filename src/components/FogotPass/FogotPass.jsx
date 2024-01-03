import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import {  restoreUserPass } from '../../redux/auth/operations';
import { useEffect, useState } from 'react';
import { selectIsError } from '../../redux/auth/selectors';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .matches(
      /^[-?\w.?%?]+@\w+.{1}\w{2,4}$/,
      'Enter a valid email. For example user@gmail.com'
    )
    .required('Required'),
});


export const FogotPass = () => {

    const error = useSelector(selectIsError);
    
    const dispatch = useDispatch();
    const [screenSize, setScreenSize] = useState({
      isDesctopScreen: typeof window !== 'undefined' && window.innerWidth >= 1440,
      isTabletScreen: window.innerWidth >= 768 && window.innerWidth < 1440,
      isMobileScreen: window.innerWidth  < 768,
    });
    const navigate = useNavigate();

  
    useEffect(() => {
      toast.error(error);
    }, [error]);

    useEffect(() => {
      const handleWindowResize = () => {
        setScreenSize({
          isDesctopScreen: window.innerWidth >= 1440,
          isTabletScreen: window.innerWidth >= 768 && window.innerWidth < 1440,
          isMobileScreen: window.innerWidth  < 768,
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
            onSubmit={(values, action) => {
              
              action.resetForm();
              dispatch(
                restoreUserPass({
                  email: values.email,
                }))
                toast.error(error);
                if (!error) {
                  navigate('/signin');
                }
            }}
          >
            <StyledForm>
              <h2>Fogot Password</h2>
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
      {screenSize.isMobileScreen ? <BackgroundImg320 /> : <BackgroundImg/>}
  
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

}