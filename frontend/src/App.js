import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';

import NewUser from './components/NewUser/NewUser';
import Landing from './components/Landing/Landing';
import Pref from './components/Preferences/Pref';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<NewUser />} />
        <Route path="/dash" element={<Pref />} />
      </Routes>
    </Router>
  );
}

export default App;
