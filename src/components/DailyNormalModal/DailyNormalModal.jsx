import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormikProvider, useFormik } from 'formik';

import * as Yup from 'yup';

// redux-auth
import { updateDailyNormal } from '../../redux/auth/operations';
import { selectIsError, selectUser } from '../../redux/auth/selectors';

// components
import Modal from 'components/Global/Modal/Modal';
import { NumberInputLiveFeedback } from './NumberInputLiveFeedback/NumberInputLiveFeedback';
import CalcFieldDailyNormal from './CalcFieldDailyNormal/CalcFieldDailyNormal';

//style
import {
  BoxButton,
  BoxForm,
  BoxFormula,
  BoxGender,
  BoxRate,
  BoxRequiredLitresPerDay,
  BoxTextPostScriptum,
  BoxTime,
  BoxWaterDrink,
  BoxWeight,
  ButtonSave,
  ContainerForModal,
  FieldGenger,
  Formula,
  FormulaColorText,
  ItemFormula,
  LabelGender,
  ListFormula,
  MarkPSText,
  PSText,
  SubTitle,
  Text,
} from './DailyNormalModal.styled';
import Notiflix from 'notiflix';

// const modalPlace = document.querySelector('#modal-root');

const DailyNormalModal = ({ closeModal, dailyNormalVolume, ...props }) => {
  const dispatch = useDispatch();

  const error = useSelector(selectIsError);
  const authetification = useSelector(selectUser);
  const initialDailyNorma =
    (dailyNormalVolume ?? authetification.dailyWaterRequirement ?? 2) / 1000;

  useEffect(() => {
    if (!authetification) return;
    if (error) return Notiflix.Notify.failure(`${error}`);
  }, [authetification, error, dispatch]);


  // ==== configFormikCalc
  const configFormikCalc = useFormik({
    initialValues: {
      genderRadioGroup: '',
      weight: '',
      activeTraningHours: '',
    },
    onSubmit: async values => handleSubmit(values),
    validationSchema: Yup.object().shape({
      genderRadioGroup: Yup.string()
      .required("A gender is required"),

      weight: Yup.number('Only number')
        .integer('Only integer number')
        .positive('Only positive')
        .lessThan(700, 'You have a lot hard weigth')
        .required('Required'),

      activeTraningHours: Yup.number('Only number')
        .positive('Only positive')
        .lessThan(24, 'You cannot active more 24 hours')
        .integer('Only integer number'),
    }),
  });

  const configFormikWaterVolume = useFormik({
    initialValues: {
      waterVolume: initialDailyNorma,
    },
    onSubmit: async values => handleSubmit(values),
    validationSchema: Yup.object({
      waterVolume: Yup.number().lessThan(
        15,
        'You can could drown in that much water'
      ),
    }),
  }); 

  // Press Save
  const handleSubmit = async values => {
    const { waterVolume } = values;

    dispatch(updateDailyNormal({ dailyWaterRequirement: waterVolume * 1000 }));

    if (!error) {
      Notiflix.Notify.success(
        'Goal set! Stay hydrated and track your progress!'
      );
      closeModal();
    }
  };


  return (
    <>
      <Modal
        close={closeModal}
        closeModal={closeModal}
        title={'My daily norma'}
        // portalParent={modalPlace}
      >
        <ContainerForModal>
          <BoxFormula>
            <ListFormula>
              <ItemFormula>
                <Formula>
                  For girl:&nbsp;
                  <FormulaColorText>
                    V=(M*0,03)&nbsp;+&nbsp;(T*0,4)
                  </FormulaColorText>
                </Formula>
              </ItemFormula>

              <ItemFormula>
                <Formula>
                  For man:&nbsp;
                  <FormulaColorText>
                    V=(M*0,04)&nbsp;+&nbsp;(T*0,6)
                  </FormulaColorText>
                </Formula>
              </ItemFormula>
            </ListFormula>

            <BoxTextPostScriptum>
              <PSText>
                <MarkPSText>*&nbsp;</MarkPSText>V is the volume of the water
                norm in liters per day, M is your body weight, T is the time of
                active sports, or another type of activity commensurate in terms
                of loads (in the absence of these, you must set 0)
              </PSText>
            </BoxTextPostScriptum>
          </BoxFormula>

          <FormikProvider value={configFormikCalc}>
            <Form>
              <BoxForm>
                <BoxRate>
                  <SubTitle>Calculate your rate:</SubTitle>

                  <BoxGender id="genderRadioGroup">
                    <div 
                      role="group" 
                      aria-labelledby="genderRadioGroup"
                      // label="One of these please"
                      // value={values.radioGroup}
                      // error={errors.radioGroup}
                      // touched={touched.radioGroup}
                    >
                      <LabelGender>
                        <FieldGenger
                          id='radioGirl'
                          value="girl"
                          name="genderRadioGroup"
                          type="radio"
                          // onChange={() => test(value)}
                        />
                        For girl
                      </LabelGender>

                      <LabelGender>
                        <FieldGenger
                          type="radio"
                          id="radioMan"
                          name="genderRadioGroup"
                          value="man"
                        />
                        For man
                      </LabelGender>
                    </div>
                  </BoxGender>

                  <BoxWeight>
                    <NumberInputLiveFeedback
                      aboveText="Your weight in kilograms:"
                      label=""
                      type="number"
                      id="weight"
                      name="weight"
                      placeholder="0"
                      helpText="Press your weight in kilograms"
                    />
                  </BoxWeight>

                  <BoxTime>
                    <NumberInputLiveFeedback
                      aboveText="The time of active participation in sports or other activities with a high physical. load:"
                      label=""
                      type="number"
                      id="activeTraningHours"
                      name="activeTraningHours"
                      placeholder="0"
                      helpText="How many hours per day you active"
                    />
                  </BoxTime>

                  <CalcFieldDailyNormal name="calcDailyNormal" />
                  
                </BoxRate>
              </BoxForm>
            </Form>
          </FormikProvider>

          <FormikProvider value={configFormikWaterVolume}>
            <Form>
              <BoxForm>
                <BoxWaterDrink>
                  <SubTitle>Write down how much water you will drink:</SubTitle>

                  <NumberInputLiveFeedback
                    aboveText=""
                    label=""
                    type="number"
                    id="waterVolume"
                    name="waterVolume"
                    placeholder="0"
                    helpText="Enter daily normal water in Litre"
                  />
                </BoxWaterDrink>

                <BoxButton>
                  <ButtonSave type="submit" onSubmit={handleSubmit}>
                    Save
                  </ButtonSave>
                </BoxButton>
                </BoxForm>
            </Form>
          </FormikProvider>
        </ContainerForModal>
      </Modal>
    </>
  );
};

export default DailyNormalModal;
