import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <nav>
         <Link to="/home">Home</Link>
         <Link to="/offers"> | Offers</Link>
         <Link to="/product"> | Products</Link>
         <Link to="/storeLocator"> | Store Locator</Link>
         <Link to="/blog"> | Blog</Link>
         <Link to="/contact-us"> | Contact Us</Link>
         <Link to="/html-playground"> | Html Playground</Link>
         <Link to="/login"> | Login</Link>
         <Link to="/counter"> | Counter</Link>
         <Link to="/course-add"> | Add Course</Link>
       </nav>
    </div>
  );
}

export default App;
