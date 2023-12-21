import { Wrapper } from 'components/Global/Global.styled';
import { P, Logo, LogoDiv, Icon, Avatar, UserName, UserDiv, HeaderDiv, MyDailyNormaDiv, MyDailyNorma, Litr, Edit, Div, Img } from './HomePage.styled';


export const HomePage = () => {
  return (
    <>
      <Wrapper>
        
        <HeaderDiv>

          <LogoDiv>
            <Logo src="Logo.png" alt="Logo" />
            <P>TRACKER OF WATER</P>
          </LogoDiv>
        
          <UserDiv>
            <UserName>UserName</UserName>
            <Avatar></Avatar>
            <Icon></Icon>
          </UserDiv>

        </HeaderDiv>

        <MyDailyNormaDiv>
          <MyDailyNorma>My daily norma</MyDailyNorma>
          <Div>
          <Litr>1.5 L</Litr>
          <Edit>Edit</Edit>
          </Div>
        </MyDailyNormaDiv>
        {/* <Div>
        <Img src="Frame.png" alt="Background"></Img></Div> */}
      </Wrapper>
    </>
  );
};


