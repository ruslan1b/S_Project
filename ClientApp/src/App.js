import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Partners from './components/Partners';
import Contacts from './components/Contacts';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer/Footer';

import './custom.css';

const App = () => (
  <>
    <NavMenu />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/registration' element={<Registration />} />
      <Route exact path='/partners' element={<Partners />} />
      <Route exact path='/contacts' element={<Contacts />} />
    </Routes>
    <Footer />
  </>
);

export default App;
