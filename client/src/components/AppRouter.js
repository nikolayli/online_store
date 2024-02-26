import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const isAuth = false;
  const navigate = useNavigate();
  
  if (isAuth) {
    return (
      <Routes>
        {authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
    );
  } else {
    navigate(SHOP_ROUTE);
    return null;
  }
};

export default AppRouter;