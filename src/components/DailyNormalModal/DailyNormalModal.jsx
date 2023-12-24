import React from "react";
import Modal from "components/Modal/Modal";

import { 
  BoxFormula,
  BoxRate,
  BoxRequiredLitresPerDay,
  BoxTextPostScriptum, 
  BoxWaterDrink, 
  ButtonSave, 
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

          <BoxRate>
            <SubTitle>Calculate your rate:</SubTitle>
            <FormRate>
              <label htmlFor="">For girl
                <input type="checkbox" />
              </label>
              
              <label htmlFor="">For man
                <input type="checkbox" />
              </label>

              <label htmlFor="">Your weight in kilograms:
                <input type="number" />
              </label>
              
              <label htmlFor="">The time of active participation in sports or other activities with a high physical. load:
                <input type="number" />
              </label>
              
            </FormRate>

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

          <ButtonSave>Save</ButtonSave>

        </Modal>
    </>
    
  )
}

export default DailyNormalModal;