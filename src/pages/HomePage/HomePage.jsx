import React, { useState, useEffect } from 'react';
import DailyNormalModal from 'components/DailyNormalModal/DailyNormalModal.jsx';
import {
  ImgEdit,
  ImgDelete,
  ImgGlass,
  ImgPlusAdd,
  ImgPlus,
  Div2,
  DivLeftPart,
  DivFlex,
  ImgBottle,
  DivFirstPart,
  SpanCount,
  SpanDate,
  DivListItem,
  ButtonDelete,
  ButtonEdit,
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
import glass from '../../icons/Glass.svg';
import edit from '../../icons/Edit.svg';
import delet from '../../icons/Delete.svg';
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
import { deleteEntryThunk, getTodayEntriesThunk } from '../../redux/hydrationEntries/operations.js';
import { selectEntiesToday, selectProgress } from '../../redux/hydrationEntries/selectors.js';


export const HomePage = () => {
  let progress = useSelector(selectProgress);
  const [progressFlag, setProgressFlag] = useState(0);

  useEffect(()=>{
  if (progress < 25) {
  setProgressFlag(0)
  } else if (progress >= 25 && progress < 75) {
  setProgressFlag(1)
  } else if (progress >= 75) {
  setProgressFlag(2)
  }
  },[progress])
  
  const isTelegramBotStarted = useSelector(selectIsTelegramBotStarted);
  const dailyWaterRequirement = useSelector(selectDailyWaterRequirement);
  const [showDailyNormalModal, setDailyNormalModal] = useState(false);
  const toggleModal = () => setDailyNormalModal(!showDailyNormalModal);
  const dispatch = useDispatch();
  const [showAddWaterModal, setShowAddWaterModal] = useState(false);
  // const [showEditWaterModal, setShowEditWaterModal] = useState(false);
  // const [data, setData] = useState([]);
  const [editingEntryData, setEditingEntryData] = useState(null);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  // const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");

 const listWater = useSelector(selectEntiesToday);

 useEffect(() => {
  dispatch(getTodayEntriesThunk());
}, [isDeleteModal, dispatch]);

  // const handleOnDeleteModal = () => {
  //   setIsDeleteModal(true);
  // }

  const handleCloseDeleteModal = () => {
    setIsDeleteModal(false);
    setEditId("");
  };

  // const closeEditModal = () => {
  //   setEditModal(false);
  //   setEditId("");
  // };

  const onEditClick = item => {
    setEditingEntryData({ ...item });
  };

  const onDeleteClick = async (id) => {
    setEditId(id);
    setIsDeleteModal(true);

    const response = await dispatch(deleteEntryThunk(id));

    if (response.success) {
        setIsDeleteModal(false);
        setEditingEntryData(null);
    }
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
    setShowAddWaterModal(true);
  };

  const closeAddWaterModal = () => {
    setShowAddWaterModal(false);
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
                <Per className={progressFlag === 2 ? 'flagged' : ''}>100%</Per>
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
                  {listWater.map(item => (
                    <DivListItem key={item._id} className="delete-line">
                      <DivFirstPart>
                        <ImgGlass
                          src={glass}
                          
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
                        <ButtonEdit
                          disabled={item.id === editingEntryData?.id}
                          onClick={() => onEditClick(item)}
                        >
                          <ImgEdit
                            src={edit}
                            width={16}
                            height={16}
                            alt="Edit"
                          />
                        </ButtonEdit>

                        <ButtonDelete
                          onClick={() => onDeleteClick(item._id)}
                        >
                          <ImgDelete
                            src={delet}
                            width={14}
                            height={14}
                            alt="Delete"
                          />
                        </ButtonDelete>

                      </div>
                    </DivListItem>
                  ))}
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
        <Modal close={closeAddWaterModal} title={'Add water'}>
          <AddWaterModal />
        </Modal>
      )}

      {/* {showEditWaterModal && (
        <Modal close={closeEditModal} title={'Edit water'}>
          <EditWaterModal/>
        </Modal>
      )} */}

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
