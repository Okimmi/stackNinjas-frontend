import React from "react";
import Modal from "components/Modal/Modal";

import { 
  BoxTextPostScriptum, 
  Formula, 
  FormulaText, 
  MarkPSText, 
  PSText, 
  Title } from "./DailyNormalModal.styled";

const DailyNormalModal = ({closeModal}) => {

  
  return (
    <>
        <Modal closeModal={closeModal}>
          <Title>My daily norma</Title>

          <Formula>
            For girl:
            <FormulaText>
              V=(M*0,03) + (T*0,4)
            </FormulaText>
          </Formula>

          <Formula>
            For man:
            <FormulaText>
              V=(M*0,03) + (T*0,4)
            </FormulaText>
          </Formula>

          <BoxTextPostScriptum>
            <MarkPSText>
              *
            </MarkPSText>
            <PSText>
              V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
            </PSText>
          </BoxTextPostScriptum>

        </Modal>
    </>
    
  )
}

export default DailyNormalModal;