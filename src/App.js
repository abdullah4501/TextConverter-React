import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <TextForm />
    </>
  )
}

export default App;