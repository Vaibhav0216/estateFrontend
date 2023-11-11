import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn'; // Fixed typo here
import SignUp from './Pages/SignUp'; // Fixed typo here
import Profile from './Pages/Profile';
import About from './Pages/About';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sign-in' element={<SignIn/>} /> {/* Fixed component name */}
            <Route path='/sign-up' element={<SignUp/>} /> {/* Fixed component name */}
            <Route path='/profile' element={<Profile/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    </BrowserRouter>
  );
}
