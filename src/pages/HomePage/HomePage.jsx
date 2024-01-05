import React, { useState, useEffect, useMemo } from 'react';

import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import DailyNormalModal from 'components/DailyNormalModal/DailyNormalModal.jsx';
import {
  // ImgEdit,
  // ImgDelete,
  // ImgGlass,
  ImgPlusAdd,
  ImgPlus,
  Div2,
  DivLeftPart,
  DivFlex,
  ImgBottle,
  // DivFirstPart,
  // SpanCount,
  // SpanDate,
  // DivListItem,
  // ButtonDelete,
  // ButtonEdit,
  ButtonAddWater,
  DivTodayList,
  PToday,
  MyDailyNormaDiv,
  MyDailyNorma,
  Litr,
  Edit,
  Div,
  Background,
  BackgroundImage,
  Today,
  DivToday,
  SliderInput,
  Per,
  Percents,
  SliderDiv,
  AddWaterButton,
  AddWater,
  DivAddWater,
  DivTodayAndMonth,
} from './HomePage.styled.js';
import plus from '../../icons/Plus.svg';
import plusAdd from '../../icons/PlusAdd.svg';
// import glass from '../../icons/Glass.svg';
// import edit from '../../icons/Edit.svg';
// import delet from '../../icons/Delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDailyWaterRequirement,
  selectIsTelegramBotStarted,
} from '../../redux/auth/selectors.js';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal.jsx';
import Modal from '../../components/Global/Modal/Modal.jsx';
import { MonthStatesTable } from '../../components/MonthStatesTable/MonthStatesTable.jsx';
import { TelegramBotInvite } from 'components/TelegramBotInvite/TelegramBotInvite.jsx';
import { WaterDelModal } from 'components/WaterDelModal/WaterDelModal.jsx';
import { getTodayEntriesThunk, updateEntryThunk } from '../../redux/hydrationEntries/operations.js';
import {
  selectEntiesToday,
  selectProgress,
} from '../../redux/hydrationEntries/selectors.js';
import EditWaterModal from 'components/EditWaterModal/EditWaterModal.jsx';
import ItemWater from 'components/ItemWater/ItemWater.jsx';
import { createPortal } from 'react-dom';

export const HomePage = () => {
  let progress = useSelector(selectProgress);
  const [progressFlag, setProgressFlag] = useState(0);
  
  useEffect(() => {
    if (progress < 25) {
      setProgressFlag(0);
    } else if (progress >= 25 && progress < 75) {
      setProgressFlag(1);
    } else if (progress >= 75) {
      setProgressFlag(2);
    }
  }, [progress]);

  const isTelegramBotStarted = useSelector(selectIsTelegramBotStarted);
  const dailyWaterRequirement = useSelector(selectDailyWaterRequirement);
  const [showDailyNormalModal, setDailyNormalModal] = useState(false);
  const toggleModal = () => setDailyNormalModal(!showDailyNormalModal);
  const dispatch = useDispatch();
  const [showAddWaterModal, setShowAddWaterModal] = useState(false);
  const [showEditWaterModal, setShowEditWaterModal] = useState(false);
  const [dataForEditModal, setDataForEditModal] = useState(null);
  // const [data, setData] = useState([]);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  // const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState('');

  const listWater = useSelector(selectEntiesToday);
  
  //array for drag-drop
  const [tasks, setTasks] = useState(listWater);
  const tasksIds = useMemo(() => tasks.map(task => task._id), [tasks]);
  // state for active drag-task
  const [activeTask, setActiveTask] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, //5px
      },
    })
  );

  useEffect(() => {
    dispatch(getTodayEntriesThunk());
  }, [isDeleteModal, dispatch]);

  // const handleOnDeleteModal = () => {
  //   setIsDeleteModal(true);
  // }

  const handleCloseDeleteModal = () => {
    setIsDeleteModal(false);
    setEditId('');
  };

  // const closeEditModal = () => {
  //   setEditModal(false);
  //   setEditId("");
  // };

  const onDeleteClick = async id => {
    setEditId(id);
    setIsDeleteModal(true);
    setTasks((prev) => prev.filter(task => task._id !== id));
  };

  // const onSaveEdit = () => {
  //   const nextData = data.map(item => {
  //     if (item.id === editingEntryData?.id) {
  //       return editingEntryData;
  //     }
  //     return item;
  //   });
  //   setData(nextData);
  //   setEditingEntryData(null);
  // };

  // const onCancelEdit = () => {
  //   setEditingEntryData(null);
  // };

  const addWaterModalShow = () => {
    setShowAddWaterModal(!showAddWaterModal);

    dispatch(getTodayEntriesThunk());
  };

  const editWaterModalShow = item => {
    if (showEditWaterModal) {
      setShowEditWaterModal(false);
      return;
    }
    setDataForEditModal(item);
    setShowEditWaterModal(true);
  };

  // const onAdd = () => {
  //   setData([
  //     ...data,
  //     {
  //       ...newEntryData,
  //       id: Date.now().toString(),
  //       date: new Date().toISOString(),
  //     },
  //   ]);
  //   setNewEntryData({ amount: '' });
  // };

// drad-drop
const onDragStart = (event) => { 

  if(event.active.data.current?.type === 'Task') {
    setActiveTask(event.active.data.current.task);
    return;
  }
}

const onDragEnd = (event) => {
  setActiveTask(null);

  const { active, over } = event;
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  if (activeId === overId) return;

}

const onDragOver = (event) => {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  if (activeId === overId) return;

  const isActiveATask = active.data.current?.type === "Task";
  const isOverATask = over.data.current?.type === "Task";

  if (!isActiveATask) return;

  // Im dropping a Task over another Task
  if (isActiveATask && isOverATask) {

    setTasks((tasks) => {
      const activeIndex = tasks.findIndex((t) => t._id === activeId);
      const overIndex = tasks.findIndex((t) => t._id === overId);
      // for drop Task this Task in one Column
      // if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
      //   tasks[activeIndex].columnId = tasks[overIndex].columnId;
      //   return arrayMove(tasks, activeIndex, overIndex - 1);
      // }

      const tempTask = {...tasks[activeIndex]}

      // swap active-task.amount
      dispatch(updateEntryThunk({
        entryId: tasks[activeIndex]._id, 
        time: tasks[overIndex].time, 
        amount: tasks[overIndex].amount
      }))
      // with over-task.amount
      dispatch(updateEntryThunk({
        entryId: tasks[overIndex]._id, 
        time:  tempTask.time,
        amount: tempTask.amount
      }))

      return arrayMove(tasks, activeIndex, overIndex);
    });

    //setTasks(dispatch(getTodayEntriesThunk()));
  }

  const isOverAColumn = over.data.current?.type === "Column";

  // Im dropping a Task over a column
  // for drop Task this Task in different Columns
  if (isActiveATask && isOverAColumn) {
    setTasks((tasks) => {
      const activeIndex = tasks.findIndex((t) => t.id === activeId);

      tasks[activeIndex].columnId = overId;
      // console.log("DROPPING TASK OVER COLUMN", { activeIndex });
      return arrayMove(tasks, activeIndex, activeIndex);
    });
  }
}

const onUpdateTask = (id, name) => {
  const newTask = tasks.map(task => {
    if(task.id !== id) return task;

    return { ...task, name };
  });
  
  setTasks(newTask);
}

  return (
    <>
      <Background>
        <BackgroundImage />
        <Div2>
          <DivLeftPart>
            <MyDailyNormaDiv>
              <MyDailyNorma>My daily norma</MyDailyNorma>
              <Div>
                <Litr>{dailyWaterRequirement / 1000} L</Litr>
                <Edit onClick={toggleModal}>Edit</Edit>
              </Div>
            </MyDailyNormaDiv>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImgBottle className="bottle-image" alt="Bottle" />
            </div>

            <DivFlex>
              <DivToday>
                <Today>Today</Today>
                <SliderDiv>
                  <SliderInput
                    type="range"
                    min="1"
                    max="100"
                    value={progress}
                  />
                </SliderDiv>
                <Percents>
                  <Per className={progressFlag === 0 ? 'flagged' : ''}>0%</Per>
                  <Per className={progressFlag === 1 ? 'flagged' : ''}>50%</Per>
                  <Per className={progressFlag === 2 ? 'flagged' : ''}>
                    100%
                  </Per>
                </Percents>
              </DivToday>

              <AddWaterButton onClick={addWaterModalShow} type="button">
                <DivAddWater>
                  <ImgPlus src={plus} width={24} height={24} alt="Plus" />
                  <AddWater>Add Water</AddWater>
                </DivAddWater>
              </AddWaterButton>
            </DivFlex>
          </DivLeftPart>

          <DivTodayAndMonth>
            <PToday>Today</PToday>


            <DivTodayList>
              <div>
              <DndContext 
                sensors={sensors}
                onDragStart={onDragStart} // begin draging-object move
                onDragEnd={onDragEnd}     // drop /or end draging-object(only for Columns) move 
                onDragOver={onDragOver}   // drop Task in over another column/Task
              >
                <SortableContext items={tasksIds}>
                  {tasks.map(item => (
                    <ItemWater 
                      key={item._id}
                      item={item}
                      onEdit={editWaterModalShow}
                      onDelete={onDeleteClick}
                    />
                    // <DivListItem key={item._id} className="delete-line">
                    //   <DivFirstPart>
                    //     <ImgGlass
                    //       src={glass}
                    //       width={26}
                    //       height={26}
                    //       alt="Glass"
                    //     />

                    //     <SpanCount>{item.amount} ml</SpanCount>
                    //     <SpanDate>
                    //       {new Date(item.time)
                    //         .getHours()
                    //         .toString()
                    //         .padStart(2, '0')}
                    //       :
                    //       {new Date(item.time)
                    //         .getMinutes()
                    //         .toString()
                    //         .padStart(2, '0')}
                    //     </SpanDate>
                    //   </DivFirstPart>
                    //   <div>
                    //     <ButtonEdit onClick={() => editWaterModalShow(item)}>
                    //       <ImgEdit src={edit} width={16} height={16} alt="Edit" />
                    //     </ButtonEdit>

                    //     <ButtonDelete onClick={() => onDeleteClick(item._id)}>
                    //       <ImgDelete
                    //         src={delet}
                    //         width={14}
                    //         height={14}
                    //         alt="Delete"
                    //       />
                    //     </ButtonDelete>
                    //   </div>
                    // </DivListItem>
                  ))}
                </SortableContext>

                {/* Create portal for Drag-component */}
                { createPortal(
                  <DragOverlay>
                    {
                      activeTask && (

                        <ItemWater
                          key={activeTask.id} 
                          item={activeTask} 
                        /> 
                      )
                    }

                  </DragOverlay>,
                  document.body
                )}

              </DndContext>
              </div>
              
              <div>
                <ButtonAddWater onClick={addWaterModalShow}>
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
            

            <MonthStatesTable></MonthStatesTable>
          </DivTodayAndMonth>
        </Div2>

        {!isTelegramBotStarted && <TelegramBotInvite />}
      </Background>

      {showDailyNormalModal && <DailyNormalModal closeModal={toggleModal} />}

      {showAddWaterModal && (
        <Modal close={addWaterModalShow} title={'Add water'}>
          <AddWaterModal close={addWaterModalShow} />
        </Modal>
      )}
      {showEditWaterModal && (
        <Modal close={editWaterModalShow} title={'Edit water'}>
          <EditWaterModal data={dataForEditModal} close={editWaterModalShow} />
        </Modal>
      )}

      {isDeleteModal && (
        <Modal
          close={handleCloseDeleteModal}
          waterId={editId}
          title={'Delete entry'}
        >
          <WaterDelModal close={handleCloseDeleteModal} waterId={editId} />
        </Modal>
      )}
    </>
  );

  
};


