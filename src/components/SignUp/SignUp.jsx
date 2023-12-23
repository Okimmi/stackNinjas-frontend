import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import {  register } from '../../redux/auth/operations';

import iconeye from '../../images/show_icon.svg';
import hidepas from '../../images/hide_icon.svg';
import { useState } from 'react';
import { BackgroundImg, BottleStyled, ErMsg, FormBtnStyled, SightInContainer, SightUp, StyledBtn, StyledField, StyledForm, Styledlabel } from 'components/SignIn/SignIn.styled';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address')
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/, 'Enter a valid email. For example user@gmail.com')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(48, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter')
    .required('Required'),
    passwordRepeat: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  });
  

export const SignUp = () => {
    
    const [showPassword, setShowPassword] = useState(false);

   
    const dispatch = useDispatch();
      return <>
          <SightInContainer>
          <Formik
        initialValues={{
          email: '',
          password: '',
          passwordRepeat: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          dispatch(register({
            email: values.email,
            password: values.password,
            passwordRepeat: values.passwordRepeat,
          }));
        }
      }
      > 
        <StyledForm>
            <h2>Sign In</h2>
          <Styledlabel htmlFor="email">Enter your email
          <StyledField id="email" name="email" 
          placeholder="E-mail" 
          />
          <ErMsg component="span" name="email" />
        </Styledlabel>
          <Styledlabel htmlFor="password">Enter your password
          <StyledField id="password" 
              type={showPassword ? 'text' : 'password'}
              name="password"   
              placeholder="Password" 
              title="password"
           />
           <StyledBtn onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <img src={iconeye} width={18} height={18} alt="Hide Password" />
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
            <Styledlabel htmlFor="passwordRepeat">Repeat password
          <StyledField id="passwordRepeat" 
              type={showPassword ? 'text' : 'password'}
              name="passwordRepeat"   
              placeholder="Repeat password" 
              title="passwordRepeat"
           />
           <StyledBtn onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <img src={iconeye} width={18} height={18} alt="Hide Password" />
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
            <ErMsg component="span" name="passwordRepeat" />
          <FormBtnStyled type="submit">Sign Up</FormBtnStyled>

          <SightUp>Sign in</SightUp>
        </StyledForm>
       
      </Formik> 
           <BottleStyled />
           <BackgroundImg/>
        </SightInContainer>
        
         </>
}