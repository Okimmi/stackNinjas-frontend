import React from "react";
import Modal from "components/Modal/Modal";

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

const DailyNormalModal = ({closeModal}) => {


  return (
    <>
        <Modal closeModal={closeModal}>
          <Title>My daily norma</Title>

          <BoxFormula>
            
            <ListFormula>
              <ItemFormula>
                <Formula>
                  For girl:&nbsp;<FormulaColorText>V=(M*0,03) + (T*0,4)</FormulaColorText>
                </Formula>
              </ItemFormula>

              <ItemFormula>
                <Formula>
                  For man:&nbsp;<FormulaColorText>V=(M*0,03) + (T*0,4)</FormulaColorText>
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

          <FormRate>
            <BoxRate>
              <SubTitle>Calculate your rate:</SubTitle>
            
              <BoxGender>
                <Fieldset>
                  <label htmlFor="girl">
                    <input type="radio" id="girl" name="gender" value="girl" checked/>
                    For girl
                  </label>

                  <label htmlFor="man">
                    <input type="radio" id="man" name="gender" value="man" />
                    For man
                  </label>
                </Fieldset>
              </BoxGender>
              
              <BoxWeight>
                <label htmlFor="">Your weight in kilograms:
                  <input type="number" />
                </label>
              </BoxWeight>
              
              <BoxTime>
                <label htmlFor="">The time of active participation in sports or other activities with a high physical. load:
                  <input type="number" />
                </label>
              </BoxTime>
              
              <BoxRequiredLitresPerDay>
                <Text>The required amount of water in liters per day:</Text>
                <RequiredText>1.8 L</RequiredText>
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
        </Modal>
    </>
    
  )
}

export default DailyNormalModal;