import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
// 组件
import Login from './pages/login';
import Home from './pages/home';
import News from './pages/news';
import Todos from './pages/todos';

render(
  // <React.StrictMode>严格模式检查仅在开发模式下运行；它们不会影响生产构建
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />}>
              <Route index element={<div>Select a news</div>} />
              <Route path=":newsId" element={<News />} />
            </Route>
            <Route path="todos" element={<Todos />} />
          </Route>
          <Route path="*" element={<div>404 page</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
