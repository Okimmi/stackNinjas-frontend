import React, { useState } from 'react';
import { Wrapper } from 'components/Global/Global.styled';
import { DivTodayList, PToday, P, Logo, LogoDiv, Icon, Avatar, UserName, UserDiv, HeaderDiv, MyDailyNormaDiv, MyDailyNorma, Litr, Edit, Div, Background, Img, BackgroundImage, Today, DivToday, SliderInput, Per, Percents, SliderDiv, AddWaterButton, AddWater, DivAddWater, DivTodayAndMonth } from './HomePage.styled.js';

export const HomePage = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  const [data, setData] = useState([]);
  const [editingEntryData, setEditingEntryData] = useState(null);
  const [newEntryData, setNewEntryData] = useState({ amount: '' });

  const onEditClick = (item) => {
    setEditingEntryData({ ...item });
  };

  const onDeleteClick = (item) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this entry?');
    if (isConfirmed) {
      setData(data.filter((i) => i.id !== item.id));
    }
  };

  const onSaveEdit = () => {
    const nextData = data.map((item) => {
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

  const onAdd = () => {
    setData([
      ...data,
      { ...newEntryData, id: Date.now().toString(), date: new Date().toISOString() },
    ]);
    setNewEntryData({ amount: '' });
  };
  return (
    <>
      <Background>
        <BackgroundImage />
        <HeaderDiv>
          <LogoDiv>
            <Logo src="logo.png" alt="Logo" />
            <P>TRACKER OF WATER</P>
          </LogoDiv>

          <UserDiv>
            <UserName>UserName</UserName>
            <Avatar></Avatar>
            <Icon src="img/Vector.png" alt="Icon"></Icon>
          </UserDiv>
        </HeaderDiv>

        <MyDailyNormaDiv>
          <MyDailyNorma>My daily norma</MyDailyNorma>
          <Div>
            <Litr>1.5 L</Litr>
            <Edit>Edit</Edit>
          </Div>
        </MyDailyNormaDiv>
        <Img src="img/Frame.png" alt="Bottle" />

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
          <DivAddWater>
            <Img src="img/outline.png" alt="Plus"/>
            <AddWater>Add Water</AddWater>
          </DivAddWater>
        </AddWaterButton>
        
        <DivTodayAndMonth>
          <PToday>Today</PToday>
          <DivTodayList>
          <div>
      <h1>List of water entries</h1>
      {editingEntryData ? (
        <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
          <input
            value={editingEntryData.amount}
            onChange={(e) => setEditingEntryData({ ...editingEntryData, amount: e.target.value })}
          />
          <button onClick={onSaveEdit}>Save</button>
          <button onClick={onCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>
          <input
            value={newEntryData.amount}
            onChange={(e) => setNewEntryData({ ...newEntryData, amount: e.target.value })}
          />
          <button onClick={onAdd}>Add</button>
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        {data.map((item) => (
          <div style={{ display: 'flex', gap: 10 }} key={item.id}>
            <span>{item.amount}</span>
            <span>{item.date}</span>
            <button
              disabled={item.id === editingEntryData?.id}
              onClick={() => onEditClick(item)}
            >
              Edit
            </button>
            <button
              disabled={item.id === editingEntryData?.id}
              onClick={() => onDeleteClick(item)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
          </DivTodayList>
        </DivTodayAndMonth>
      </Background>
    </>
  );
};
