import './App.css';

import MtobiOptions from './components/MtobiOptions';

import { Route, Routes } from 'react-router-dom'

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
