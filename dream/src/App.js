import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import AddNew from './components/AddNew';
import BlogDetail from './components/BlogDetail';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';


function App() {

  return (

    <div className="App" >
      <Navbar />
      {/* Website Content */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/create" element={<AddNew />}></Route>
        <Route path="/blogs/:id" element={<BlogDetail />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
