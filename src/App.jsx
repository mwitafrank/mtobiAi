import './App.css';

import { Configuration, OpenAIApi } from 'openai'
import MtobiOptions from './components/MtobiOptions';
import { arrayItems } from './MyOptions/index'
import AiLists from './components/AiLists';
import { useState } from 'react';

import { Route, Routes } from 'react-router-dom'

import { BrowserRouter, Link } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import Home from './components/Home';



function App() {

  return <>

    <Routes>
      <Route path='/' element={<IntroPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/mtobioptions' element={<MtobiOptions />} />
    </Routes>
  </>

}

export default App;
