import React, { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Container from './Components/Container';
import AppBar from './Components/User/AppBar';
import { getCurrentUser } from './redux/Auth/auth-operation';
import { useDispatch } from 'react-redux';
import PrivetRoute from './Components/User/PrivetRoute';
import PublicRoute from './Components/User/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const PhonebookView = lazy(() => import('./views/PhoneBookView/PhoneBookView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivetRoute path="/contacts" redirectTo="/login">
            <PhonebookView />
          </PrivetRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
