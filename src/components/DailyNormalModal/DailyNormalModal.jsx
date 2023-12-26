import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// redux-auth
import { updateDailyNormal } from '../../redux/auth/operations';
import { selectIsError, selectUser, } from '../../redux/auth/selectors';

// components
import Modal from 'components/DailyNormalModal/Modal/Modal';
import { NumberInputLiveFeedback } from './NumberInputLiveFeedback/NumberInputLiveFeedback';
import CalcFieldDailyNormal from './CalcFieldDailyNormal/CalcFieldDailyNormal';

//style
import {
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
  Title,
} from './DailyNormalModal.styled';


//const modalPlace = document.querySelector('#modal-root');

const DailyNormalModal = ({ closeModal, dailyNormalVolume, ...props }) => {
  const dispatch = useDispatch();

  const error = useSelector(selectIsError);
  const authetification = useSelector(selectUser);
  const initialDailyNorma = (dailyNormalVolume ?? authetification.dailyWaterRequirement ?? 2) / 1000;

  useEffect(() => {
    if (!authetification) return;
    if (error) return toast.error(error.message);
  }, [authetification, error]);


  // ==== configFormik
  const configFormik = useFormik({
    initialValues: {
      gender: 'girl',
      weight: '',
      activeTraningHours: '',
      waterVolume: initialDailyNorma,
    },
    onSubmit: async values => handleSubmit(values),
    validationSchema: Yup.object({
      gender: Yup.string(),
      weight: Yup
        .number('Only number')
        .integer('Only integer number')
        .positive('Only positive')
        .lessThan(700, 'You have a lot hard weigth')
        .required('Required'),
      activeTraningHours: Yup
        .number('Only number')
        .positive('Only positive')
        .lessThan(24, 'You cannot active more 24 hours')
        .integer('Only integer number'),
      waterVolume: Yup.number().lessThan(50, 'You can could drown in that much water'),
    }),
  });

  // Press Save
  const handleSubmit = async values => {
    console.log(values);
    const { waterVolume } = values;
    dispatch(updateDailyNormal({ dailyWaterRequirement: waterVolume * 1000 }));

    if (!error) {
      toast.success('Goal set! Stay hydrated and track your progress!');
      console.log('Goal set! Stay hydrated and track your progress!');
      
      setTimeout(() => { closeModal(); }, 3000);
    }
  };
  
  return (
    <>
      <Modal 
        closeModal={closeModal} 
        // portalParent={modalPlace}
      >
        <Title>My daily norma</Title>

        <BoxFormula>
          <ListFormula>
            <ItemFormula>
              <Formula>
                For girl:&nbsp;
                <FormulaColorText>V=(M*0,03) + (T*0,4)</FormulaColorText>
              </Formula>
            </ItemFormula>

            <ItemFormula>
              <Formula>
                For man:&nbsp;
                <FormulaColorText>V=(M*0,04) + (T*0,6)</FormulaColorText>
              </Formula>
            </ItemFormula>
          </ListFormula>

          <BoxTextPostScriptum>
            <PSText>
              <MarkPSText>*&nbsp;</MarkPSText>V is the volume of the water norm
              in liters per day, M is your body weight, T is the time of active
              sports, or another type of activity commensurate in terms of loads
              (in the absence of these, you must set 0)
            </PSText>
          </BoxTextPostScriptum>
        </BoxFormula>

        <FormikProvider value={configFormik}>
          <Form>
            <BoxForm>
              <BoxRate>
                <SubTitle>Calculate your rate:</SubTitle>

                <BoxGender id="my-radio-group">
                  <div role="group" aria-labelledby="my-radio-group">
                    <LabelGender>
                      <FieldGenger
                        id="girl"
                        value="girl"
                        name="gender"
                        type="radio"
                        defaultChecked
                      />
                      For girl
                    </LabelGender>

                    <LabelGender>
                      <FieldGenger
                        type="radio"
                        id="man"
                        name="gender"
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

                <BoxRequiredLitresPerDay>
                  <Text>The required amount of water in liters per day:</Text>
                  <CalcFieldDailyNormal name="calcDailyNormal" />
                </BoxRequiredLitresPerDay>
              </BoxRate>

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

              <ButtonSave type="submit" onSubmit={handleSubmit}>Save</ButtonSave>
            </BoxForm>
          </Form>
        </FormikProvider>
      </Modal>
    </>
  );
};

export default DailyNormalModal;
