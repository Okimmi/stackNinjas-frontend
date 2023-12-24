import React, { useState } from 'react';
import { Wrapper } from 'components/Global/Global.styled';
import { SpanCount, SvgPlus, SpanDate, DivListItem, ButtonDelete, ButtonEdit, ButtonAddWater, DivTodayList, PToday, P, Logo, LogoDiv, Icon, Avatar, UserName, UserDiv, HeaderDiv, MyDailyNormaDiv, MyDailyNorma, Litr, Edit, Div, Background, Img, BackgroundImage, Today, DivToday, SliderInput, Per, Percents, SliderDiv, AddWaterButton, AddWater, DivAddWater, DivTodayAndMonth } from './HomePage.styled.js';

export const HomePage = () => {
  
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  const [data, setData] = useState([]);
  const [editingEntryData, setEditingEntryData] = useState(null);
  const [newEntryData, setNewEntryData] = useState({ amount: '' });
  const [newEntry, setNewEntry] = useState('');

  const onEditClick = (item) => {
    setEditingEntryData({ ...item });
  };

  const onDeleteClick = (item) => {
      setData(data.filter((i) => i.id !== item.id));
    
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
            <svg style={{ display: 'none' }}>
              <symbol id="icon" viewBox="0 0 55 32">
              <path stroke="#407BFF" d="M29.045 31.329c-0.429 0.428-1.010 0.668-1.615 0.668s-1.187-0.24-1.615-0.668l-22.857-22.857c-0.404-0.433-0.624-1.006-0.613-1.599s0.25-1.157 0.669-1.576 0.984-0.659 1.576-0.669c0.592-0.010 1.165 0.209 1.599 0.613l21.242 21.242 21.242-21.242c0.209-0.225 0.462-0.405 0.742-0.53s0.583-0.192 0.89-0.197c0.307-0.005 0.612 0.051 0.896 0.166s0.543 0.286 0.76 0.503c0.217 0.217 0.389 0.476 0.503 0.76s0.171 0.589 0.166 0.896c-0.005 0.307-0.073 0.61-0.197 0.89s-0.305 0.533-0.529 0.742l-22.857 22.857z"></path>
            </symbol></svg>
              <svg width="11" height="11" >
                <use xlinkHref="#icon"></use>
              </svg>
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
         <div>  
          <ButtonAddWater onClick={onAdd}>
          <svg style={{ display: 'none' }}>
            <symbol id="icon-Vector" viewBox="0 0 32 32">
            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.2" d="M16 3.2v25.6M28.8 16h-25.6" stroke="#407BFF"></path>
            </symbol></svg>
            <SvgPlus width="8" height="8" >
                <use xlinkHref="#icon-Vector"></use>
            </SvgPlus>
              Add water</ButtonAddWater>
         </div>
      )}
        <div>
          {data.map((item) => (
            <DivListItem key={item.id} className="delete-line">
              <svg style={{ display: 'none' }}><symbol id="icon-Glass" viewBox="0 0 25 32">
                <path stroke="#407BFF" strokeWidth="0.75" d="M0.759 0.379l2.247 31.156v0.085h19.342l2.247-31.144v-0.097h-23.836zM21.553 30.748h-17.747l-1.685-23.337h0.926l1.524 20.567c0.009 0.108 0.057 0.209 0.136 0.283s0.181 0.116 0.288 0.117h0.036c0.056-0.004 0.11-0.019 0.16-0.044s0.095-0.060 0.131-0.103c0.037-0.043 0.065-0.093 0.082-0.146s0.025-0.111 0.021-0.167l-1.524-20.506h19.336l-1.685 23.337zM23.298 6.538h-19.462l-0.335-4.546c-0.010-0.111-0.062-0.214-0.144-0.288s-0.188-0.114-0.298-0.112c-0.113 0.011-0.217 0.066-0.29 0.153s-0.111 0.2-0.104 0.314l0.335 4.486h-0.938l-0.382-5.298h22.001l-0.382 5.292z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M7.601 16.376c0.004 0.282 0.089 0.557 0.247 0.79s0.379 0.414 0.637 0.519 0.542 0.131 0.814 0.073c0.273-0.058 0.522-0.196 0.717-0.397s0.327-0.457 0.38-0.734 0.023-0.564-0.086-0.824c-0.108-0.26-0.29-0.482-0.522-0.638s-0.505-0.238-0.783-0.237c-0.186 0.001-0.37 0.039-0.542 0.112s-0.327 0.181-0.458 0.315-0.234 0.294-0.303 0.47c-0.069 0.175-0.104 0.363-0.102 0.552zM9.561 16.376c0 0.111-0.033 0.221-0.094 0.313s-0.148 0.165-0.249 0.208c-0.102 0.043-0.213 0.054-0.321 0.032s-0.207-0.076-0.285-0.154-0.131-0.179-0.152-0.289c-0.021-0.109-0.010-0.223 0.032-0.326s0.113-0.191 0.205-0.253 0.199-0.095 0.309-0.095c0.147 0 0.289 0.059 0.393 0.165s0.163 0.249 0.163 0.399z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M7.607 11.727c0.279 0 0.552-0.084 0.783-0.241s0.413-0.381 0.519-0.642c0.107-0.261 0.135-0.549 0.080-0.827s-0.189-0.532-0.386-0.732c-0.197-0.2-0.448-0.336-0.722-0.392s-0.557-0.027-0.815 0.081c-0.258 0.108-0.478 0.292-0.633 0.527s-0.238 0.512-0.238 0.795c0 0.379 0.149 0.743 0.413 1.012s0.623 0.419 0.997 0.419zM7.607 9.732c0.11 0 0.217 0.033 0.309 0.095s0.163 0.15 0.205 0.253c0.042 0.103 0.053 0.216 0.032 0.326s-0.074 0.21-0.152 0.289c-0.078 0.079-0.177 0.133-0.285 0.154s-0.22 0.011-0.321-0.032c-0.102-0.043-0.188-0.115-0.249-0.208s-0.094-0.202-0.094-0.313c0-0.149 0.059-0.293 0.163-0.399s0.246-0.165 0.393-0.165z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M17.622 16.412c0.279 0 0.552-0.084 0.783-0.241s0.413-0.38 0.519-0.642c0.107-0.262 0.135-0.549 0.080-0.827s-0.189-0.532-0.386-0.732-0.448-0.336-0.722-0.392c-0.274-0.055-0.557-0.027-0.815 0.081s-0.478 0.292-0.633 0.527c-0.155 0.235-0.238 0.512-0.238 0.795 0 0.379 0.148 0.743 0.413 1.011s0.623 0.419 0.997 0.419zM17.622 14.424c0.11 0 0.218 0.033 0.309 0.095s0.163 0.151 0.204 0.254c0.042 0.103 0.052 0.217 0.031 0.327s-0.076 0.21-0.154 0.289c-0.078 0.079-0.178 0.132-0.286 0.153s-0.22 0.009-0.322-0.035-0.188-0.117-0.248-0.21c-0.060-0.094-0.092-0.203-0.091-0.315 0.002-0.149 0.061-0.29 0.165-0.395s0.244-0.163 0.391-0.163z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M12.71 13.715c0.279 0 0.552-0.084 0.783-0.241s0.413-0.381 0.519-0.642c0.107-0.261 0.135-0.549 0.080-0.827s-0.189-0.532-0.386-0.732c-0.197-0.2-0.448-0.336-0.722-0.392s-0.557-0.027-0.815 0.081c-0.258 0.108-0.478 0.292-0.633 0.527s-0.238 0.512-0.238 0.795c0 0.379 0.149 0.743 0.413 1.012s0.623 0.419 0.997 0.419zM12.71 11.721c0.11 0 0.217 0.033 0.309 0.095s0.163 0.15 0.205 0.253c0.042 0.103 0.053 0.216 0.032 0.326s-0.074 0.21-0.152 0.289c-0.078 0.079-0.177 0.133-0.285 0.154s-0.22 0.011-0.321-0.032c-0.102-0.043-0.188-0.115-0.249-0.208s-0.094-0.202-0.094-0.313c-0.004-0.077 0.007-0.153 0.033-0.225s0.066-0.138 0.118-0.193c0.052-0.056 0.115-0.1 0.184-0.13s0.144-0.046 0.22-0.046v0.030z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M10.021 21.825c0.006 0.232 0.079 0.458 0.211 0.648s0.316 0.337 0.529 0.422 0.447 0.104 0.671 0.055c0.224-0.049 0.429-0.164 0.589-0.33s0.268-0.377 0.311-0.605c0.043-0.229 0.018-0.465-0.071-0.679s-0.238-0.397-0.429-0.526c-0.191-0.129-0.415-0.197-0.644-0.197-0.312 0.008-0.608 0.139-0.826 0.366s-0.339 0.53-0.339 0.847zM11.186 21.51c0.061 0 0.122 0.018 0.173 0.053s0.091 0.084 0.114 0.141c0.024 0.058 0.030 0.121 0.018 0.182s-0.042 0.117-0.085 0.161-0.099 0.074-0.159 0.086c-0.060 0.012-0.123 0.006-0.18-0.018s-0.105-0.064-0.139-0.116c-0.034-0.052-0.052-0.113-0.052-0.175 0-0.084 0.033-0.164 0.091-0.223s0.137-0.092 0.22-0.092z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M15.656 20.51c0.239 0.008 0.475-0.056 0.678-0.186s0.362-0.317 0.458-0.54c0.096-0.222 0.124-0.469 0.080-0.708s-0.157-0.459-0.326-0.631c-0.168-0.173-0.384-0.29-0.619-0.337s-0.478-0.021-0.698 0.074c-0.22 0.095-0.407 0.255-0.537 0.459s-0.196 0.443-0.19 0.686c0.007 0.309 0.131 0.604 0.345 0.823s0.503 0.348 0.808 0.359zM15.656 19.012c0.082 0 0.161 0.033 0.22 0.092s0.091 0.139 0.091 0.223c0 0.084-0.033 0.164-0.091 0.223s-0.137 0.092-0.22 0.092c-0.083 0-0.163-0.033-0.222-0.092s-0.093-0.139-0.095-0.223c0-0.042 0.008-0.083 0.024-0.122s0.039-0.074 0.069-0.103 0.064-0.052 0.103-0.068c0.038-0.015 0.079-0.023 0.121-0.022z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M18.117 10.726c0.236 0 0.467-0.071 0.664-0.204s0.35-0.323 0.44-0.544c0.090-0.222 0.114-0.465 0.068-0.7s-0.16-0.451-0.327-0.621c-0.167-0.17-0.38-0.285-0.612-0.332s-0.472-0.023-0.69 0.069c-0.218 0.092-0.405 0.247-0.536 0.447s-0.201 0.434-0.201 0.674c0 0.322 0.126 0.63 0.35 0.857s0.528 0.355 0.845 0.355zM18.117 9.229c0.046-0.013 0.095-0.016 0.142-0.007s0.092 0.029 0.13 0.058c0.038 0.029 0.070 0.067 0.091 0.111s0.033 0.092 0.033 0.141-0.011 0.097-0.033 0.141c-0.021 0.044-0.052 0.082-0.091 0.111s-0.083 0.049-0.13 0.058c-0.047 0.009-0.096 0.007-0.142-0.007-0.046 0.013-0.095 0.016-0.142 0.007s-0.092-0.029-0.13-0.058c-0.038-0.029-0.070-0.067-0.091-0.111s-0.033-0.092-0.033-0.141 0.011-0.097 0.033-0.141c0.021-0.044 0.052-0.082 0.091-0.111s0.083-0.049 0.13-0.058c0.047-0.009 0.096-0.007 0.142 0.007z"></path>
                <path stroke="#407BFF" strokeWidth="0.75" d="M6.436 29.226c-0.054 0.025-0.102 0.061-0.141 0.106s-0.069 0.097-0.088 0.154c-0.019 0.057-0.025 0.117-0.020 0.177s0.023 0.118 0.051 0.17c0.037 0.071 0.092 0.13 0.159 0.172s0.145 0.064 0.223 0.065c0.066 0.002 0.132-0.013 0.191-0.042 1.826-0.949 3.846-1.447 5.898-1.455 2.171 0.032 4.312 0.521 6.286 1.436 0.078 0.041 0.167 0.057 0.254 0.046s0.169-0.050 0.234-0.11c0.065-0.060 0.111-0.139 0.13-0.226s0.012-0.178-0.021-0.261c-0.042-0.108-0.123-0.194-0.227-0.242-2.090-0.97-4.358-1.486-6.657-1.515-2.181 0.002-4.33 0.525-6.274 1.527z"></path>
              </symbol></svg>
              <svg width="26" height="26" >
                <use xlinkHref="#icon-Glass"></use>
              </svg>
              <SpanCount >{'200 ml'}</SpanCount>
              <SpanDate>{'14:00 PM'}</SpanDate>
              
              {/* ДОДАТИ ДАНІ З ФОРМИ
              <span >{item.amount}</span>
              <SpanDate>{item.date}</SpanDate> */}
            <ButtonEdit
              disabled={item.id === editingEntryData?.id}
              onClick={() => onEditClick(item)}
            >
              <svg style={{ display: 'none' }}>
                <symbol id="icon-outline" viewBox="0 0 32 32">
                <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2.2857"
                fill="transparent"
                stroke="#9EBBFF"     
                d="M23.409 4.552l2.571-2.572c0.536-0.536 1.263-0.837 2.021-0.837s1.485 0.301 2.021 0.837c0.536 0.536 0.837 1.263 0.837 2.021s-0.301 1.485-0.837 2.021l-16.181 16.181c-0.806 0.805-1.799 1.397-2.891 1.722l-4.091 1.219 1.219-4.091c0.325-1.092 0.917-2.085 1.722-2.891l13.611-13.609zM23.409 4.552l4.020 4.020M25.143 19.048v7.238c0 0.909-0.361 1.782-1.004 2.424s-1.515 1.004-2.424 1.004h-16c-0.909 0-1.781-0.361-2.424-1.004s-1.004-1.515-1.004-2.424v-16c0-0.909 0.361-1.781 1.004-2.424s1.515-1.004 2.424-1.004h7.238"
                ></path>
                </symbol>
              </svg>
              <svg width="16" height="16">
                <use xlinkHref="#icon-outline"></use>
              </svg>
            </ButtonEdit>
            <ButtonDelete 
              disabled={item.id === editingEntryData?.id}
              onClick={() => onDeleteClick(item)}
            >
              <svg style={{ display: 'none' }}> 
              <symbol id="icon-Delete" viewBox="0 0 27 32">
              <path strokeLinejoin="round" 
                strokeLinecap="round" 
                strokeMiterlimit="4" 
                strokeWidth="2.2857" 
                fill="transparent"
                stroke="#EF5050"
                d="M17.89 11.429l-0.527 13.714M10.066 25.143l-0.527-13.714M24.728 6.537c0.521 0.079 1.039 0.163 1.557 0.253M24.728 6.537l-1.627 21.155c-0.067 0.861-0.456 1.666-1.090 2.253s-1.466 0.913-2.33 0.912h-11.934c-0.864 0-1.696-0.326-2.33-0.912s-1.023-1.391-1.090-2.253l-1.627-21.155M24.728 6.537c-1.759-0.266-3.527-0.468-5.3-0.605M2.7 6.537c-0.521 0.078-1.039 0.162-1.557 0.251M2.7 6.537c1.759-0.266 3.526-0.468 5.3-0.605M19.429 5.932v-1.396c0-1.798-1.387-3.297-3.185-3.354-1.686-0.054-3.373-0.054-5.059 0-1.798 0.056-3.185 1.557-3.185 3.354v1.396M19.429 5.932c-3.804-0.294-7.625-0.294-11.429 0"></path>
              </symbol></svg>
              <svg width="16" height="16">
                <use xlinkHref="#icon-Delete"></use>
              </svg>
            </ButtonDelete>
          </DivListItem>
        ))}
      </div>
    </div>
          </DivTodayList>
        </DivTodayAndMonth>
      </Background>
    </>
  );
};
