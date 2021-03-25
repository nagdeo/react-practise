import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <nav>
         <Link to="/home">Home</Link>
         <Link to="/offers"> | Offers</Link>
       </nav>
    </div>
  );
}

export default App;
