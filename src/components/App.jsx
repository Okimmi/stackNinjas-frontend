import { SharedLayout } from './SharedLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { SignInPage } from 'pages/SignInPage/SignInPage';
import { ForgotPasswordPage } from 'pages/ForgotPasswordPage/ForgotPasswordPage';
import { GlobalStyle } from './GlobalStyle';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from '../redux/hooks/useAuth';
import { refreshUser } from '../redux/auth/operations.js';
import { useEffect } from 'react';
import { HomePage } from 'pages/HomePage/HomePage';
import { MainPage } from 'pages/MainPage/MainPage';
import { RestorePass } from './RestorePass/RestorePass';
import { Redirect } from './AuthForm/redirect';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
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
            path="/change-password"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<ForgotPasswordPage />}
              />
            }
          />

          <Route
            path="/current/:accessToken"
            element={
              <RestrictedRoute redirectTo="/" component={<Redirect />} />
            }
          />
          <Route
            path="/forgot-password/:restorePasswordToken"
            element={<RestorePass />}
          />

          <Route
            path="/forgot-password/:restorePasswordToken"
            element={<RestorePass />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
