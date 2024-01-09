import React from "react";

import plusAdd from '../../../icons/PlusAdd.svg';
import ItemWaterToday from "../ItemWaterToday/ItemWaterToday";

// styles
import { ButtonAddWater, DivTodayList, ImgPlusAdd } from "pages/HomePage/HomePage.styled";


export const TodayList = ({listWater, onDelete, onEdit, onAdd}) => {

  return (
    <>
      <DivTodayList>
        <div>
          {listWater.map(item => (
            <ItemWaterToday 
                key={item._id}
                item={item}
                onDelete={onDelete}
                onEdit={onEdit}
          />
          ))}
        </div>
        <div>
          <ButtonAddWater onClick={onAdd}>
            <ImgPlusAdd
              src={plusAdd}
              width={12}
              height={12}
              alt="PlusAdd"
            />
            Add water
          </ButtonAddWater>
        </div>
      </DivTodayList>
    </>
  )
}

export default TodayList