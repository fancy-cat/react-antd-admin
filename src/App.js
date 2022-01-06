import './App.scss';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      12
      <nav>
        <Link to="/home">home page</Link>
        <Link to="/login">login page</Link>
      </nav>
    </div>
  );
}

export default App;
