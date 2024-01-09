import React from "react";

// icons
import glass from '../../../icons/Glass.svg';
import edit from '../../../icons/Pencil.svg';
import delet from '../../../icons/Trash.svg';

// styles
import { 
  ButtonDelete, 
  ButtonEdit, 
  DivFirstPart, 
  DivListItem, 
  ImgDelete, 
  ImgEdit, 
  ImgGlass, 
  SpanCount, 
  SpanDate } from "pages/HomePage/HomePage.styled";


export const ItemWaterToday = ({item, onDelete, onEdit}) => {

  return (
    <>
      <DivListItem key={item._id} className="delete-line">
        <DivFirstPart>
          <ImgGlass
              src={glass}
              width={26}
              height={26}
              alt="Glass"
          />

          <SpanCount>{item.amount} ml</SpanCount>
          <SpanDate>
              {new Date(item.time)
                  .getHours()
                  .toString()
                  .padStart(2, '0')}
              :
              {new Date(item.time)
                  .getMinutes()
                  .toString()
                  .padStart(2, '0')}
          </SpanDate>
        </DivFirstPart>
        <div>
          <ButtonEdit onClick={() => onEdit(item)}>
            <ImgEdit src={edit} width={16} height={16} alt="Edit" />
          </ButtonEdit>

          <ButtonDelete onClick={() => onDelete(item._id)}>
            <ImgDelete
                src={delet}
                width={14}
                height={14}
                fill-opacity='0'
                alt="Delete"
            />
          </ButtonDelete>
        </div>
      </DivListItem>
    </>
  )
}

export default ItemWaterToday