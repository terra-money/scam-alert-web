import warning from './warning.svg';
import './fonts.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={warning} alt='warning' />
      <h2>SCAM ALERT</h2>
      <p>
        You are trying to visit <span className='url'>{document.referrer}</span> which is a known scam website.
      </p>
      <span
        onClick={() => {
          window.location.href = document.referrer;
        }}
        className='button'
      >
        Visit anyway
      </span>
    </div>
  );
}

export default App;
