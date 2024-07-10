import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import String from './components/String';
import Color from './components/Color';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:word" element={<String/>}/>
        <Route path="/:num" element={<Number/>}/>
        <Route path="/:word/:color1/:color2" element={<Color/>}/>
      </Routes>
    </div>
  );
}

export default App;
