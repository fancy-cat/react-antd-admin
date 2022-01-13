import React from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import MainRouter from './routes'

render(
  // <React.StrictMode>严格模式检查仅在开发模式下运行；它们不会影响生产构建
  // <React.StrictMode>
    <Provider store={store}>
      <MainRouter/>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
