import './App.css';
import { FaRocket, FaInfoCircle } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Anurag Roshan</h1>
        <p>
          <code>Your Static Website is live</code>
        </p>
        <div className="button-container">
          <button className="App-button">
            <FaRocket className="icon" />
            Get Started
          </button>
          <button className="App-button secondary">
            <FaInfoCircle className="icon" />
            Learn More
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
