import './App.scss';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      12
      <nav>
        <Link to="/home">go home page</Link>
        <Link to="/login">go login page</Link>
      </nav>
    </div>
  );
}

export default App;
