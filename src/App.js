import React from 'react';
import headImage from './assets/images/headImage.png';
import './App.css';
import CovidAPIContextProvider from './contexts/covid_api_context';
import Home from './screens/home/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headImage} className="App-logo" alt="logo" />
        <p style={{color:'black'}}>
          Covid19 Tracker
        </p>
      </header>
      <CovidAPIContextProvider>
      <Home/>
      </CovidAPIContextProvider>
    </div>
  );
}

export default App;
