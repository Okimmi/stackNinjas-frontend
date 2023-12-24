import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Modal from "components/Modal/Modal";

//style
import { 
  BoxFormula,
  BoxGender,
  BoxRate,
  BoxRequiredLitresPerDay,
  BoxTextPostScriptum, 
  BoxTime, 
  BoxWaterDrink, 
  BoxWeight, 
  ButtonSave, 
  Fieldset, 
  FormRate, 
  Formula, 
  FormulaColorText, 
  ItemFormula, 
  ListFormula, 
  MarkPSText, 
  PSText, 
  RequiredText, 
  SubTitle, 
  Text, 
  Title } from "./DailyNormalModal.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";



const DailyNormalModal = ({closeModal}) => {
  // const dispatch = useDispatch();
  const [volume, setVolume] = useState(0);
  const user = useSelector(selectUser);
  console.log(user);

  let koefWeight = 0;
  let koefActiveTime = 0;

  const dailyNormalSchema = Yup.object().shape({
    weight: Yup.number()
      .required('Field required')
      .positive('Only positive')
      .integer('Only integer number'),
      // .min(1, 'Need to eat more porridge')
      // .more(700, 'You have very hard weight'),
    activeTreningHours: Yup.number()
      .required('Field required')
      .positive('Only positive')
      .integer('Only integer number'),
      // .min(0)
      // .more(40000, "People don't live that long..."),
    water: Yup.number()
      .required('Field required')
      .positive('Only positive')
      .integer('Only integer number'),
      // .more(700, 'You have very hard weight'),
  });


  return (
    <>
        <Modal closeModal={closeModal}>
          <Title>My daily norma</Title>

          <BoxFormula>
            <ListFormula>
              <ItemFormula>
                <Formula>
                  For girl:&nbsp;<FormulaColorText>V=(W*0,03) + (T*0,4)</FormulaColorText>
                </Formula>
              </ItemFormula>

              <ItemFormula>
                <Formula>
                  For man:&nbsp;<FormulaColorText>V=(W*0,04) + (T*0,6)</FormulaColorText>
                </Formula>
              </ItemFormula>
            </ListFormula>

            <BoxTextPostScriptum>
              <PSText>
                <MarkPSText>*&nbsp;</MarkPSText>
                V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
              </PSText>
            </BoxTextPostScriptum>

          </BoxFormula>

          <Formik
            initialValues={{
              weight: 0,
              activeTraningHours: 0,
              water: user.dailyWaterRequirement,
            }}
            validationSchema={dailyNormalSchema}
            onSubmit={(values, action) => {
              console.log(values);

              action.resetForm();
              toast.success('All good');
              // // dispatch(register({
              // }));
            }}
          >
          <FormRate>
            <BoxRate>
              <SubTitle>Calculate your rate:</SubTitle>
            
              <BoxGender>
                <Fieldset>
                  <label htmlFor="girl">
                    <input 
                      type="radio" 
                      id="girl" 
                      name="gender" 
                      value="girl" 
                      checked
                      onChange={(e) => {
                        koefWeight = 0.03;
                        koefActiveTime = 0.4;
                      }}
                    />
                    For girl
                  </label>

                  <label htmlFor="man">
                    <input 
                      type="radio" 
                      id="man" 
                      name="gender" 
                      value="man"
                      onChange={() => {
                        koefWeight = 0.04;
                        koefActiveTime = 0.6;
                      }}
                    />
                    For man
                  </label>
                </Fieldset>
              </BoxGender>
              
              <BoxWeight>
                <label htmlFor="">Your weight in kilograms:
                  <input  
                    type="number"
                    onChange={() => {
                      const vol = koefWeight * values.weight + values.activeTraningHours * koefActiveTime;
                      setVolume(vol);
                      }}/>
                </label>
              </BoxWeight>
              
              <BoxTime>
                <label htmlFor="">The time of active participation in sports or other activities with a high physical. load:
                  <input type="number" />
                </label>
              </BoxTime>
              
              <BoxRequiredLitresPerDay>
                <Text>The required amount of water in liters per day:</Text>
                <RequiredText>{ }</RequiredText>
              </BoxRequiredLitresPerDay>

            </BoxRate>

            <BoxWaterDrink>
              <SubTitle>Write down how much water you will drink:</SubTitle>
            
              <label htmlFor="">
              <input type="number" />
              </label>
            </BoxWaterDrink>

            <ButtonSave type="submit">Save</ButtonSave>
          </FormRate>
          </Formik>
        </Modal>
    </>
    
  )
}

export default DailyNormalModal;