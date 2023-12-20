import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Wrapper } from './Global/Global.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};
