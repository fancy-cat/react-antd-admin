import './App.scss';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      12
      <nav>
        <Link to="/home">go home page</Link>
        <Link to="/login">go login page</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
