import './App.scss';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      当前环境：{process.env.REACT_APP_ENV}
      当前baseUrl：{process.env.REACT_APP_BASEURL}
      <nav>
        <Link to="/home">go home page</Link><br/>
        <Link to="/login">go login page</Link><br/>
        <Link to="/todos">go todo page</Link><br/>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
