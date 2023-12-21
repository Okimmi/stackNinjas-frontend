import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { ErMsg, FormBtnStyled, FormContainer, StyledField, StyledForm, Styledlabel } from './SignIn.styled';
import { logIn } from '../../redux/auth/operations';


const SignupSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter')
    .required('Required'),
  });
  

  export const SignIn  = ( ) =>{
    const dispatch = useDispatch();
      return <>
          <FormContainer>
          <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          dispatch(logIn({
            email: values.email,
            password: values.password,
          }));
        }
      }
      >
        <StyledForm>
            <h2>Sign In</h2>
          <Styledlabel htmlFor="email">Enter your email</Styledlabel>
          <StyledField id="email" name="email" 
          placeholder="email" 
          />
          <ErMsg component="span" name="email" />
  
          <Styledlabel htmlFor="password">Enter your password</Styledlabel>
          <StyledField id="password" 
              name="password"   
              type="password"
              placeholder="password" 
              title="password number must be digits and can contain spaces, dashes, parentheses and can start with +"
           />
            <ErMsg component="span" name="password" />
          <FormBtnStyled type="submit">Sign In</FormBtnStyled>
        </StyledForm>
      </Formik>
           
          </FormContainer>
         </>
  }