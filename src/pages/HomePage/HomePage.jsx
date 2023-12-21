import { Wrapper } from 'components/Global/Global.styled';
import { P, Logo, LogoDiv, Icon, Avatar, UserName, UserDiv, HeaderDiv, MyDailyNormaDiv, MyDailyNorma, Litr, Edit, Div, Background, Img } from './HomePage.styled';

export const HomePage = () => {
  
  return (
    <>
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
        
        <Img src="img/Frame_18.png" alt="Background"/>
    </>
  );
};
