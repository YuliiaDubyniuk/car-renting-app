import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App'
import {persistor, store } from '/src/redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-renting-app">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
