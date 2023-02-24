import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog';
import AddNew from './components/AddNew';
import Welcome from './components/Welcome';


function App() {

  return (
    
      <div className="App" >

        {/* Website Content */}

        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/create" element={<AddNew />}></Route>
        </Routes>

      </div>
  );
}

export default App;
