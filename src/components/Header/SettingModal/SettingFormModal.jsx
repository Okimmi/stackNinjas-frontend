// import * as yup from 'yup';

import { Title } from './SettingModal.styled';
import {
  Base,
  ErrMessage,
  FieldForm,
  FormUser,
  Gender,
  GenderWrapper,
  Password,
  TopicGender,
  // LabelsPassword,
} from './SettingsFormModal.styled';

import { ToggleIcon } from './SettingModal.styled';

export const FormModal = ({ onClose }) => {
  return (
    <>
      <Base>
        <FormUser>
          <div>
            <TopicGender>Your gender identity</TopicGender>
            <div>
              <GenderWrapper>
                <FieldForm type="radio" name="picked" />
                <Gender>Girl</Gender>
              </GenderWrapper>
              <FieldForm type="radio" name="picked" />
              <Gender>Man</Gender>
            </div>
          </div>

          <div>
            <TopicGender>Your name</TopicGender>
            <div>
              {' '}
              <FieldForm type="text" />
            </div>
          </div>

          <div>
            <TopicGender>E-mail</TopicGender>
            <div>
              {' '}
              <FieldForm type="text" />
            </div>
          </div>

          <div>
            <Title>Password</Title>
            <Password htmlFor="">Outdated password</Password>
            <div>
              <FieldForm type="password" name="" id="" />
              <ErrMessage name="password" component="p" />
              <ToggleIcon />
            </div>

            <div>
              <Password htmlFor="">New password</Password>
            </div>
            <div>
              <FieldForm type="password" name="" id="" />
              <ErrMessage name="password" component="p" />
              <ToggleIcon />
            </div>

            <div>
              <Password htmlFor="">Outdated password</Password>
              <div>
                <FieldForm type="password" name="" id="" />
                <ErrMessage name="password" component="p" />
                <ToggleIcon />
              </div>
            </div>
          </div>

          <button type="button" onClick={() => onClose()}>
            Save
          </button>
        </FormUser>
      </Base>
    </>
  );
};
