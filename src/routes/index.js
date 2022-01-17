import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AllPage from '../pages';
import menus from './config';
import App from '../App';
import { connect } from 'react-redux';

function MainRouter({userInfo}) {
  let token = userInfo && userInfo.token
  const renderRoute = (item) => {
    let Comp = AllPage[item.component]
    return <Route key={item.key} path={item.key} element={!item.auth ? <Comp /> : (token ? <Comp /> : <Navigate to="/login" replace={true} />)} />
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

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(MainRouter)
