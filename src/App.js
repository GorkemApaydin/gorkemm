import './App.css';
import logo from './npmLogo.png';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Görkem Apaydın
        </p>
        <a
          className="App-link"
          href="https://reactjsss.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go <b>ReactJS</b>
        </a>
      </header>
    </div>
  );
}

export default App;
