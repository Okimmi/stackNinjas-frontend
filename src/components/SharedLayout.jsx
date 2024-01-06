import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Wrapper } from './Global/Global.styled';
import { Footer } from './Footer/Footer';
import Loader from './Loader/Loader';
import { useAuth } from '../redux/hooks/useAuth';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
      <Footer />
      {isRefreshing && <Loader />}
    </>
  );
};
