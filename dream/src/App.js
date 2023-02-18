import './App.css';
import Home from './components/Home';
import { createContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import Blog from './components/Blog';
import AddNew from './components/AddNew';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>

        {/* Navigation bar */}
        <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" href="#scrollspyHome" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#scrollspyAbout">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#scrollspyFeats">Features</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/blog">Blog</Link>
                </li>
              </ul>
              <div className="switch">
                <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
              </div>
            </div>

          </div>
        </nav>

        {/* Website Content */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/create" element={<AddNew />}></Route>
        </Routes>





        {/* Footer */}
        <footer className="footer">
          <div className="container-fluid">
            <h3>Copyrights 2022</h3>
          </div>
        </footer>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
