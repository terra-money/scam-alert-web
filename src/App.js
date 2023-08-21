import warning from "./station.svg";
import "./fonts.css";
import "./App.css";

const SAFE_PAGE = "https://station.money";

function App() {
  if (!document.referrer || document.referrer === window.location.href) {
    //window.location.href = SAFE_PAGE
  }
  return (
    <div className="App">
      <img src={warning} alt="warning" />
      <h2>PHISHING ALERT</h2>
      <p>
        You are trying to visit <span className="url">{document.referrer}</span>
        <br />
        which is a known scam website.
      </p>
      <span
        onClick={() => {
          window.location.href = SAFE_PAGE;
        }}
        className="button__main"
      >
        Go back to safety
      </span>
      {/*
      <a
        href={document.referrer}
      >
        Visit anyway
      </a>
      */}
    </div>
  );
}

export default App;
