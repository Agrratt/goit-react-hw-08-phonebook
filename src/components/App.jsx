import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from 'components/Layout/Layout';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthOperations from 'redux/auth/authOperations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
// import { authSelectors } from 'redux/auth/authSelectors';
// import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

export function App() {
  const dispatch = useDispatch();
  // const isRefreshingUser = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(AuthOperations.fetchCurrentUser())
  })

  return (
    <div>
      {/* {isRefreshingUser ? (<Loader />) : ( */}
        <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="register" element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterPage />
              </PublicRoute>} />
            
            <Route path="login" element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>} />
                       
            <Route path="contacts" element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>} />

          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* )} */}
      
    </div>
    )
};