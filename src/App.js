import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          You are trying to visit <code>{document.referrer || 'UNDEFINED'}</code> which is a known scam website.
        </p>
        <button onClick={() => { window.location.href = document.referrer}}>Visit anyway</button>
      </header>
    </div>
  );
}

export default App;
