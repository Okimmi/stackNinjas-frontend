import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Modal from 'components/DailyNormalModal/Modal/Modal';
import { NumberInputLiveFeedback } from './NumberInputLiveFeedback/NumberInputLiveFeedback';
import CalcFieldDailyNormal from './CalcFieldDailyNormal/CalcFieldDailyNormal';

import {
  selectIsError,
  selectIsLoggedIn,
  selectUser,
} from '../../redux/auth/selectors';

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
// import { refreshUser } from "../../redux/auth/operations";

const DailyNormalModal = ({ closeModal }) => {
  // const [dailyWater, setDailyWater] = useState(0)

  const dispatch = useDispatch();

  const loading = useSelector(selectIsLoggedIn);
  const error = useSelector(selectIsError);
  const authetification = useSelector(selectUser);
  console.log(loading);
  console.log(error);
  console.log(authetification);

  useEffect(() => {
    if (!authetification) return;

    try {
    } catch (error) {
      toast.error(error.message);
    }

    // dispatch(refreshUser());
  }, [dispatch, authetification]);

  // ==== configForm
  const configFormik = useFormik({
    initialValues: {
      gender: '',
      weight: '',
      activeTraningHours: '',
      waterVolume: 1000,
    },
    onSubmit: async values => handleSubmit(values),
    validationSchema: Yup.object({
      gender: Yup.string(),
      weight: Yup.number().integer('Only integer number').required('Required'),
      activeTraningHours: Yup.number().integer('Only integer number'),
      waterVolume: Yup.number(),
    }),
  });

  const handleSubmit = async values => {
    console.log(values);
    // const { waterVolume } = values;

    try {
      //    dispatch(refreshUser({ dailyWaterRequirement: waterVolume, }));
      toast.success('Goal set! Stay hydrated and track your progress!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Modal closeModal={closeModal}>
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
                  helpText=""
                />
              </BoxWaterDrink>

              <ButtonSave type="submit">Save</ButtonSave>
            </BoxForm>
          </Form>
        </FormikProvider>
      </Modal>
    </>
  );
};

export default DailyNormalModal;
