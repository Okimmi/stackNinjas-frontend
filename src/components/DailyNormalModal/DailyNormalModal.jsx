import React from "react";
import Modal from "components/Modal/Modal";

import { 
  BoxFormula,
  BoxTextPostScriptum, 
  Formula, 
  FormulaColorText, 
  ItemFormula, 
  ListFormula, 
  MarkPSText, 
  PSText, 
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

        </Modal>
    </>
    
  )
}

export default DailyNormalModal;