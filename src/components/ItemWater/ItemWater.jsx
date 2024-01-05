import React, { useState } from "react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import glass from '../../icons/Glass.svg';
import edit from '../../icons/Edit.svg';
import delet from '../../icons/Delete.svg';

// styles
import { ButtonDelete, ButtonEdit, DivFirstPart, DivListItem, DivListItemIsDragging, ImgDelete, ImgEdit, ImgGlass, SpanCount, SpanDate } from "pages/HomePage/HomePage.styled";

export const ItemWater = ({item, onDelete, onEdit, ...props }) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  // hook for sotrtable
  const {
    setNodeRef, 
    attributes, 
    listeners, 
    transform, 
    transition, 
    isDragging,
  } = 
    useSortable({
      id: item._id,
      data: {
        type: "Task",
        item,
      },
      // disabled: editMode, //if (editMode) -> not dragging
    });

  const styleOriginal = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  // render for portal
  if (isDragging) {
    return (
      <DivListItemIsDragging 
        ref={setNodeRef}
        style={styleOriginal}
        {...attributes}
        {...listeners}
      >
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
                  alt="Delete"
              />
            </ButtonDelete>
          </div>
      </DivListItemIsDragging>
    )
  }

    return (
      <>
        <DivListItem 
          key={item._id} 
          className="delete-line task"
          ref={setNodeRef}
          style={styleOriginal}
          {...attributes}
          {...listeners}
          onMouseEnter={() => setMouseIsOver(true)}
          onMouseLeave={() => setMouseIsOver(false)}
        >
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
                        alt="Delete"
                    />
                </ButtonDelete>
              </div>

        </DivListItem>
      </>
    )

}

export default ItemWater