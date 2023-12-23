// import * as yup from 'yup';
// import { useFormik } from 'formik';
import {
  Base,
  ErrMessage,
  FieldForm,
  FormUser,
  Gender,
  GenderWrapper,
  Password,
  RadioField,
  SaveBtn,
  TopicGender,
  Wrapper,
  // LabelsPassword,
} from './SettingsFormModal.styled';
import { Title, ToggleIcon } from './SettingModal.styled';

export const FormModal = ({ onClose }) => {
  // const formik = useFormik({
  //   initialValues: {
  //     // ваші початкові значення тут
  //   },
  //   onSubmit: values => {
  //     // ваша логіка відправки форми тут
  //   },
  // });

  return (
    <>
      <Base>
        <FormUser>
          <Wrapper>
            <TopicGender>Your gender identity</TopicGender>
            <div>
              <GenderWrapper>
                <RadioField type="radio" name="picked" />
                <Gender>Girl</Gender>
              </GenderWrapper>
              <RadioField type="radio" name="picked" />
              <Gender>Man</Gender>
            </div>
          </Wrapper>

          <Wrapper>
            <Title>Your name</Title>
            <div style={{ position: 'relative' }}>
              {' '}
              <FieldForm
                type="text"
                placeholder="David"
                autoComplete="off"
                // style={
                //   formik.errors.David && formik.touched.myField
                //     ? { borderColor: 'red' }
                //     : null
                // }
                style={{ color: '#407BFF' }}
              />
            </div>
          </Wrapper>

          <Wrapper>
            <Title>E-mail</Title>
            <div style={{ position: 'relative' }}>
              {' '}
              <FieldForm
                type="text"
                placeholder="david01@gmail.com"
                autoComplete="off"
              />
            </div>
          </Wrapper>

          <Wrapper>
            {/* <div> */}
            <TopicGender>Password</TopicGender>
            <Password htmlFor="">Outdated password</Password>
            <div style={{ position: 'relative', marginBottom: '12px' }}>
              <FieldForm
                type="password"
                name=""
                id=""
                placeholder="Password"
                autoComplete="off"
              />

              <ToggleIcon />

              <ErrMessage name="password" component="p" />
              {/* </div> */}
            </div>

            {/* <div> */}
            <Password htmlFor="">New password</Password>
            <div style={{ position: 'relative', marginBottom: '12px' }}>
              <FieldForm
                type="password"
                name=""
                id=""
                placeholder="Password"
                autoComplete="off"
              />
              <ErrMessage name="password" component="p" />
              <ToggleIcon />
            </div>
            {/* </div> */}

            {/* <div> */}
            <Password htmlFor="">Outdated password</Password>
            <div style={{ position: 'relative', marginBottom: '12px' }}>
              <FieldForm type="password" name="" id="" placeholder="Password" />
              <ToggleIcon />
              <ErrMessage name="password" component="p" autoComplete="off" />
            </div>
            {/* </div> */}
          </Wrapper>

          <SaveBtn type="button" onClick={() => onClose()}>
            Save
          </SaveBtn>
        </FormUser>
      </Base>
    </>
  );
};
