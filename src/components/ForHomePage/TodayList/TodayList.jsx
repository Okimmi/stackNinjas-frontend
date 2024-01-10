import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import plusAdd from '../../../icons/PlusAdd.svg';
import ItemWaterToday from "../ItemWaterToday/ItemWaterToday";

// styles
import { ButtonAddWater, DivTodayList, ImgPlusAdd } from "pages/HomePage/HomePage.styled";



export const TodayList = ({listWater, onDelete, onEdit, onAdd}) => {
  const dataLists = {id: 'column-1', name: "list", cards: [...listWater]}
    
  // const data = dataLists.cards.map((item, index) => {return {...item, order: index}})
  const [orderedData, setOrderedData] = useState(listWater);

  useEffect(() => {
    setOrderedData(listWater)
  },[listWater]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  } 

  const onDragEnd = (result) => {
    const {destination, source, type} = result;
    console.log(result);

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index 
    ) {
        return;
    }

    // User move List
    // if (type === 'list') {
    //   const items = reorder(
    //      orderedData, 
    //      source.index, 
    //      destination.index
    //   ).map((item, index) => ({...item, order: index}))

    //   setOrderedData(items);
    // }

    // User moves a Card
    if (type === 'card') {
      const newOrderedData = [...orderedData];
      console.log('newOrderedData',newOrderedData);
      
      const sourceList = [...newOrderedData];

      // const sourceList = newOrderedData.find(list => list.id === source.droppableId)
      // const destList = newOrderedData.find(list => list.id === destination.droppableId)
      // console.log(sourceList, destList);

      // if (!sourceList || !destList) return;

      // // check if cards exist on list
      // if (!sourceList.cards) sourceList.cards = [];
      // if (!destList.cards) destList.cards = [];

      // Moving card in the same List
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList,
          source.index,
          destination.index,
        )

        console.log(reorderedCards)
        
        // reorderedCards.forEach((card, idx) => { 
        //   card.order = idx;
        // });

        // sourceList = reorderedCards;

        setOrderedData(newOrderedData);
        //TODO: Trigger Server Action

        return;
      }

      // User move the card to another List
      // const [movedCard] = sourceList.cards.splice(source.index, 1);

      // Assign card to the destination List
      // movedCard.listId = destination.droppableId;

      // // add card to destination List
      // destList.cards.splice(destination.index, 0, movedCard);
      // sourceList.cards.forEach((card, idx) => {
      //   card.order = idx;
      // });

      // Update the order for card in destination List
      // destList.cards.forEach((card, idx) => {
      //   card.order = idx;
      // })

      setOrderedData(newOrderedData);
      //TODO: Trigger Server Action
    }


  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* <Droppable droppableId={dataLists.id} type="list" direction="horizontal">
        {(provided) => ( */}
          <DivTodayList               
            // ref={provided.innerRef}
            // {...provided.droppableProps}
            // {...provided.dragHandleProps}
          >
              
              
              <Droppable droppableId={dataLists.id} type="card">
                {(provided) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {orderedData.map((item, index) => (
                      <ItemWaterToday 
                          key={item._id}
                          index={index}
                          item={item}
                          onDelete={onDelete}
                          onEdit={onEdit}
                    />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

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
        {/* )}
        </Droppable> */}
      </DragDropContext>
    </>
  )
}

export default TodayList