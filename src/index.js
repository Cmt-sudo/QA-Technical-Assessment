import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { AuthProvider } from './auth';

ReactDOM.render(
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>,
  document.getElementById('root')
);

