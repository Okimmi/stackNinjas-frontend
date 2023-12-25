
import { SharedLayout } from "./SharedLayout";
import { MainPage } from "pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "pages/SignUpPage/SignUpPage";
import { SignInPage } from "pages/SignInPage/SignInPage";
import { ForgotPasswordPage } from "pages/ForgotPasswordPage/SignUpPage";
import { HomePage } from "pages/HomePage/HomePage";
import { GlobalStyle } from "./GlobalStyle";
import { RestrictedRoute } from "./RestrictedRoute";
import { useDispatch } from "react-redux";
import { useAuth } from "../redux/hooks/useAuth";
import { refreshUser } from "../redux/auth/operations.js";
import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { Blocks } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log(isRefreshing);

  

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);




  return isRefreshing ? (
    (<Blocks
      height="80"
      width="80"
      color="#407BFF"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      visible={true}
      />)
    ) : (<>
        <Routes>
<Route path="/" element={<SharedLayout />}>
  <Route index element={<MainPage />} />
  <Route
    path="signup"
    element={
      <RestrictedRoute redirectTo="/home" component={<SignUpPage />} />
    }
  />
  <Route
    path="signin"
    element={
      <RestrictedRoute redirectTo="/home" component={<SignInPage />} />
    }
  />
  <Route
    path="/home"
    element={
      <PrivateRoute redirectTo="/signin" component={<HomePage />} />
    }
  />
  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
</Route>
</Routes>

      <GlobalStyle />
    </>
  );
};


