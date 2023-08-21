import warning from './station.svg'
import terra from './terra.svg'
import './fonts.css'
import './App.css'

const SAFE_PAGE = 'https://station.money'

function App() {
  if (!document.referrer || document.referrer === window.location.href) {
    //window.location.href = SAFE_PAGE
  }

  if (document.referrer) {
    const { hostname } = new URL(document.referrer)
    if (hostname === 'terra.money' || hostname.endsWith('.terra.money')) {
      return (
        <div className='app__terra'>
          <img src={terra} alt='Terra logo' />
          <h2>WARNING</h2>
          <p>
            <span className='url'>{hostname}</span> is currently
            unavailable. <br /> Please visit{' '}
            <span className='url'>
              <a href='https://twitter.com/terra_money'>
                twitter.com/terra_money
              </a>
            </span>{' '}
            for updates.
          </p>
        </div>
      )
    }
  }

  return (
    <div className='App'>
      <img src={warning} alt='warning' />
      <h2>PHISHING ALERT</h2>
      <p>
        You are trying to visit <span className='url'>{document.referrer}</span>
        <br />
        which is a known scam website.
      </p>
      <span
        onClick={() => {
          window.location.href = SAFE_PAGE
        }}
        className='button__main'
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
  )
}

export default App
