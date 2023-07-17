import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import HomeScreen from './components/HomeScreen.tsx';
import LoginScreen from './components/LoginScreen.tsx';
import RegisterScreen from './components/RegisterScreen.tsx';
import { Provider } from 'react-redux';
import store from './store.tsx';
import ProfileScreen from './components/ProfileScreen.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} index={true} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      {/**
       * Private Routes
       */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
