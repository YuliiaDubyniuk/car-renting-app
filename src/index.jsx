import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from '/src/redux/rootReducer'
import './index.css';
import App from './App'

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-renting-app">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
