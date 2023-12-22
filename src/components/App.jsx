import { SharedLayout } from "./SharedLayout";
import { MainPage } from "pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "pages/SignUpPage/SignUpPage";
import { SignInPage } from "pages/SignInPage/SignInPage";
import { ForgotPasswordPage } from "pages/ForgotPasswordPage/SignUpPage";
import { HomePage } from "pages/HomePage/HomePage";
import { GlobalStyle } from "./GlobalStyle";
import { RestrictedRoute } from "./RestrictedRoute";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
            <Route path="signin"  element={
              <RestrictedRoute redirectTo="/home" component={<SignInPage />}  />} />
                <Route path="signup"  element={
                    <RestrictedRoute redirectTo="/home" component={<SignUpPage />}  />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
