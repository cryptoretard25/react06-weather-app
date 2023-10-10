import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';

function App() {
  return (
    <div className="App">
      <Header>
        <LeftBar />
        <div className='center-bar'></div>
        <RightBar />
      </Header>
      <Footer>
        Footer
      </Footer>
    </div>
  );
}

export default App;
