import React from 'react';
import Buttons from './components/Buttons';
import Input from './components/Input';
import Modal from './components/Modal';
import Select from './components/Select';

function App() {
  const appStyle = {
    backgroundColor: '#f9f9f9',
    height: '100vh', 
    width: '100vw',  
    margin: 0,      
    padding: 0,     
  };

  return (
    <div style={appStyle}>
      <Buttons />
      <Input />
      <Modal />
      <Select />
    </div>
  );
}

export default App;
