import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      {/* Navigation bar */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav justify-content-center mx-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#scrollspyHome">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Post</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      {/* Website Content */}
      <Home />



      {/* Footer */}
      <footer className="footer">
        <div className="container-fluid">
          <h3>Copyrights 2022</h3>
        </div>
      </footer>

    </div>
  );
}

export default App;
