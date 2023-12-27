import React, { useState } from 'react';
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
import AddWaterModal from 'components/AddWaterModal/AddWaterModal.jsx';
import Modal from 'shared/Modal/Modal.jsx';
import { useSelector } from 'react-redux';
import { selectDailyWaterRequirement } from '../../redux/auth/selectors.js';

export const HomePage = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [showAddWaterModal, setShowAddWaterModal] = useState(false);
  // const [isPopupVisible, setPopupVisible] = useState(false);
  // const togglePopup = () => {
  //   setPopupVisible(!isPopupVisible);
  // };

  // const token = useSelector(selectToken);
  const dailyWaterRequirement = useSelector(selectDailyWaterRequirement);

  const [showDailyNormalModal, setDailyNormalModal] = useState(false);
  const toggleModal = () => setDailyNormalModal(!showDailyNormalModal);

  const handleSliderChange = event => {
    setSliderValue(event.target.value);
  };

  const [data, setData] = useState([]);
  const [editingEntryData, setEditingEntryData] = useState(null);
  const [newEntryData, setNewEntryData] = useState({ amount: '' });

  const onEditClick = item => {
    setEditingEntryData({ ...item });
  };

  const onDeleteClick = item => {
    setData(data.filter(i => i.id !== item.id));
  };

  const onSaveEdit = () => {
    const nextData = data.map(item => {
      if (item.id === editingEntryData?.id) {
        return editingEntryData;
      }
      return item;
    });
    setData(nextData);
    setEditingEntryData(null);
  };

  const onCancelEdit = () => {
    setEditingEntryData(null);
  };

  const addWaterModalShow = () => {
    setShowAddWaterModal(true);
  }

  const closeModal = () => {
    setShowAddWaterModal(false);
  };

  const onAdd = () => {
    setData([
      ...data,
      {
        ...newEntryData,
        id: Date.now().toString(),
        date: new Date().toISOString(),
      },
    ]);
    setNewEntryData({ amount: '' });
  };

  return (
    <>
      <Background>
        <BackgroundImage />
        {/* <HeaderDiv>
          <LogoDiv>
            <Logo src="logo.png" alt="Logo" />
            <P>TRACKER OF WATER</P>
          </LogoDiv>

          <UserDiv>
            
            <UserName>Sign in</UserName>
            
              <svg style={{ display: 'none' }}>
              <symbol id="icon-Avatar" viewBox="0 0 32 32">
              <path stroke="#2F2F2F" fill="transparent" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="1.1429" d="M16 0.571c8.521 0 15.429 6.908 15.429 15.429s-6.908 15.429-15.429 15.429c-8.521 0-15.429-6.908-15.429-15.429s6.908-15.429 15.429-15.429z"></path>
              <path stroke="#2F2F2F" fill="transparent" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="1.1429" d="M20.286 9.143c0 1.137-0.452 2.227-1.255 3.030s-1.894 1.255-3.030 1.255c-1.137 0-2.227-0.452-3.030-1.255s-1.255-1.894-1.255-3.030 0.452-2.227 1.255-3.030c0.804-0.804 1.894-1.255 3.030-1.255s2.227 0.452 3.030 1.255c0.804 0.804 1.255 1.894 1.255 3.030zM7.43 25.278c0.037-2.249 0.956-4.393 2.559-5.97s3.762-2.461 6.011-2.461 4.408 0.884 6.011 2.461c1.603 1.577 2.522 3.722 2.559 5.97-2.689 1.233-5.612 1.869-8.57 1.865-3.058 0-5.961-0.667-8.57-1.865z"></path>
              </symbol>
              </svg>
              <svg width="28" height="28" style ={{borderRadius: "50%", marginRight: '4px', marginLeft: '8px'}}>
                <use xlinkHref="#icon-Avatar"></use>
              </svg>
            
            <IconWrapper>
            <svg style={{ display: 'none' }}>
              <symbol id="icon" viewBox="0 0 55 32">
              <path stroke="#407BFF" fill="transparent" d="M29.045 31.329c-0.429 0.428-1.010 0.668-1.615 0.668s-1.187-0.24-1.615-0.668l-22.857-22.857c-0.404-0.433-0.624-1.006-0.613-1.599s0.25-1.157 0.669-1.576 0.984-0.659 1.576-0.669c0.592-0.010 1.165 0.209 1.599 0.613l21.242 21.242 21.242-21.242c0.209-0.225 0.462-0.405 0.742-0.53s0.583-0.192 0.89-0.197c0.307-0.005 0.612 0.051 0.896 0.166s0.543 0.286 0.76 0.503c0.217 0.217 0.389 0.476 0.503 0.76s0.171 0.589 0.166 0.896c-0.005 0.307-0.073 0.61-0.197 0.89s-0.305 0.533-0.529 0.742l-22.857 22.857z"></path>
            </symbol></svg>
              <svg width="11" height="11" onClick={togglePopup}>
                <use xlinkHref="#icon"></use>
              </svg>
              <NewDiv isVisible={isPopupVisible}>
              <DivSettings>
                <svg style={{ display: 'none' }}>
                <symbol id="icon-settings" viewBox="0 0 32 32">
                <path stroke="#407BFF" fill="transparent" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M12.792 5.253c0.12-0.723 0.747-1.253 1.48-1.253h3.457c0.733 0 1.36 0.531 1.48 1.253l0.284 1.708c0.084 0.499 0.417 0.915 0.86 1.16 0.099 0.053 0.196 0.111 0.293 0.169 0.432 0.261 0.96 0.343 1.433 0.165l1.623-0.608c0.333-0.125 0.699-0.128 1.033-0.008s0.616 0.354 0.793 0.662l1.728 2.996c0.177 0.308 0.24 0.668 0.177 1.018s-0.249 0.665-0.523 0.89l-1.337 1.103c-0.391 0.32-0.584 0.817-0.575 1.323 0.002 0.113 0.002 0.227 0 0.34-0.009 0.504 0.184 1 0.573 1.32l1.34 1.104c0.565 0.467 0.712 1.272 0.347 1.907l-1.731 2.996c-0.178 0.307-0.458 0.542-0.793 0.662s-0.7 0.117-1.033-0.007l-1.623-0.608c-0.473-0.177-1-0.096-1.435 0.165-0.097 0.059-0.194 0.116-0.293 0.171-0.441 0.244-0.775 0.66-0.859 1.159l-0.284 1.707c-0.12 0.724-0.747 1.255-1.48 1.255h-3.459c-0.733 0-1.36-0.531-1.48-1.253l-0.284-1.708c-0.083-0.499-0.416-0.915-0.859-1.16-0.099-0.054-0.197-0.111-0.293-0.169-0.433-0.261-0.96-0.343-1.435-0.165l-1.623 0.608c-0.332 0.125-0.698 0.127-1.032 0.008s-0.615-0.354-0.793-0.661l-1.729-2.996c-0.177-0.308-0.24-0.668-0.176-1.017s0.249-0.665 0.523-0.89l1.339-1.103c0.389-0.32 0.583-0.817 0.573-1.323-0.002-0.113-0.002-0.227 0-0.34 0.009-0.504-0.184-1-0.573-1.32l-1.339-1.104c-0.274-0.225-0.459-0.541-0.523-0.89s-0.001-0.709 0.176-1.017l1.729-2.996c0.178-0.308 0.459-0.543 0.793-0.662s0.701-0.117 1.033 0.008l1.621 0.608c0.475 0.177 1.001 0.096 1.435-0.165 0.096-0.059 0.195-0.116 0.293-0.171 0.443-0.244 0.776-0.66 0.859-1.159l0.285-1.708z"></path>
                <path stroke="#407BFF" fill="transparent" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M20 16c0 1.061-0.421 2.078-1.172 2.828s-1.768 1.172-2.828 1.172c-1.061 0-2.078-0.421-2.828-1.172s-1.172-1.768-1.172-2.828c0-1.061 0.421-2.078 1.172-2.828s1.768-1.172 2.828-1.172c1.061 0 2.078 0.421 2.828 1.172s1.172 1.768 1.172 2.828z"></path>
                </symbol>
                </svg>
                <svg width="16" height="16">
                <use xlinkHref="#icon-settings"></use>
                </svg>
                <PDiv>Settings</PDiv>
              </DivSettings>
              <DivLogOut>
                <svg style={{ display: 'none' }}>
                <symbol id="icon-logout" viewBox="0 0 32 32">
                <path stroke="#407BFF" fill="transparent" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M21 12v-5c0-0.796-0.316-1.559-0.879-2.121s-1.326-0.879-2.121-0.879h-8c-0.796 0-1.559 0.316-2.121 0.879s-0.879 1.326-0.879 2.121v18c0 0.796 0.316 1.559 0.879 2.121s1.326 0.879 2.121 0.879h8c0.796 0 1.559-0.316 2.121-0.879s0.879-1.326 0.879-2.121v-5M25 20l4-4M29 16l-4-4M29 16h-17"></path>
                </symbol>
                </svg>
                <svg width="16" height="16">
                <use xlinkHref="#icon-logout"></use>
              </svg>
              <PDiv>Log out</PDiv>
              </DivLogOut>
            </NewDiv>
              </IconWrapper>
              
          </UserDiv>
        </HeaderDiv> */}
        <Div2>
          <DivLeftPart>
            <MyDailyNormaDiv>
              <MyDailyNorma>My daily norma</MyDailyNorma>
              <Div>
                <Litr>{dailyWaterRequirement} L</Litr>
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
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </SliderDiv>
                <Percents>
                  <Per>0%</Per>
                  <Per>50%</Per>
                  <Per>100%</Per>
                </Percents>
              </DivToday>

              <AddWaterButton type="button">
                <DivAddWater onClick={addWaterModalShow}>
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
                {editingEntryData ? (
                  <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                    <input
                      value={editingEntryData.amount}
                      onChange={e =>
                        setEditingEntryData({
                          ...editingEntryData,
                          amount: e.target.value,
                        })
                      }
                    />
                    <button onClick={onSaveEdit}>Save</button>
                    <button onClick={onCancelEdit}>Cancel</button>
                  </div>
                ) : null}
                <div>
                  {data.map(item => (
                    <DivListItem key={item.id} className="delete-line">
                      <DivFirstPart>
                        <ImgGlass
                          src={glass}
                          width={26}
                          height={26}
                          alt="Glass"
                        />

                        <SpanCount>{'200 ml'}</SpanCount>
                        <SpanDate>{'14:00 PM'}</SpanDate>
                      </DivFirstPart>
                      <div>
                        {/* ДОДАТИ ДАНІ З ФОРМИ
              <span >{item.amount}</span>
              <SpanDate>{item.date}</SpanDate> */}
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
                          disabled={item.id === editingEntryData?.id}
                          onClick={() => onDeleteClick(item)}
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
              </div>
            </DivTodayList>
          </DivTodayAndMonth>
        </Div2>
      </Background>

      {showAddWaterModal && (
        <Modal close={closeModal} title={'Add water'}>
          <AddWaterModal/>
        </Modal>
      )}
      {showDailyNormalModal && <DailyNormalModal closeModal={toggleModal} />}
    </>
  );
};
