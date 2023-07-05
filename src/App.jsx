

import { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Test from './components/test';
import About from './assets/pages/About';
import Home from './assets/pages/Home';



function App() {
  

  return (
    <>
   <div>
    <BrowserRouter>
      <Routes>

        <Route path='/home' element = {<Home title = "HomePage" description="This is Home Page."/>}/>
        
        <Route path='/' element = {<Test title = "Register"/>}/>
        <Route path='/aboutus' element = {<Home title = "AboutPage"/>}/>

          
        
      </Routes>
    </BrowserRouter>
   </div>
   




    </>
  )
}


export default App
