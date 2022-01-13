import './App.scss';
import { MainSider } from './components'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MainSider>
        当前环境：{process.env.REACT_APP_ENV}
        当前baseUrl：{process.env.REACT_APP_BASEURL}
        <Outlet/>
      </MainSider>
    </div>
  );
}

export default App;
