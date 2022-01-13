import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPage from '../pages';
import menus from './config';
import App from '../App';

export default function MainRouter() {
  const renderRoute = (item) => {
    let Comp = AllPage[item.component]
    return <Route key={item.key} path={item.key} element={<Comp />} />
  }
  const renderSubRoute = (item) => {
    return <Route key={item.key}>
      {
        item.subs ? item.subs.map(m => renderSubRoute(m)): renderRoute(item)
      }
    </Route>
  }
  return (
    <BrowserRouter>
      <Routes>
        {
          menus.single.map(m => renderRoute(m))
        }
        <Route path="/" element={<App />}>
          {
            [...menus.menu.map(m => m.subs ? renderSubRoute(m) : renderRoute(m)), ...menus.others.map(m => renderRoute(m))]
          }
        </Route>
        <Route path="*" element={<div>404 page</div>} />
      </Routes>
    </BrowserRouter>
  )
}