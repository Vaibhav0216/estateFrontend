import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn'; // Fixed typo here
import SignUp from './Pages/SignUp'; // Fixed typo here
import Profile from './Pages/Profile';
import About from './Pages/About';
import Header from './Components/Header';
import CreateListing from './Pages/CreateListing';
import PrivateRoute from './Components/PrivateRoute';
import UpdateListing from './Pages/UpdateListing';
import Listing from './Pages/Listing';
import Search from './Pages/Search';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sign-in' element={<SignIn/>} /> {/* Fixed component name */}
            <Route path='/sign-up' element={<SignUp/>} /> {/* Fixed component name */}
            <Route path='/listing/:listingId' element={<Listing/>} /> {/* Fixed component name */} 
            <Route path='/search' element={<Search/>} /> {/* Fixed component name */}
            <Route element={<PrivateRoute/>}> 
              <Route path='/profile' element={<Profile/>} />
              <Route path='/create-listing' element={<CreateListing/>} />
              <Route path='/update-listing/:id' element={<UpdateListing/>} />
            </Route>
            <Route path='/about' element={<About/>} />
        </Routes>
    </BrowserRouter>
  );
}
