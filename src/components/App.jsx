import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage/MainPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { SignInPage } from 'pages/SignInPage/SignInPage';
import { ForgotPasswordPage } from 'pages/ForgotPasswordPage/SignUpPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { GlobalStyle } from './GlobalStyle';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from '../redux/hooks/useAuth';
import { refreshUser } from '../redux/auth/operations.js';
import { useEffect } from 'react';
import Loader from './Loader/Loader'

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader
    />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={isLoggedIn ? <HomePage /> : <MainPage />}
          ></Route>
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<ForgotPasswordPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
