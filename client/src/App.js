import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Create from './components/create/create'
import Profile from './components/profile/profile'


const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl" >
      <Container style={{marginTop:'100px'}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Container>
      </Container>
    </BrowserRouter>
  );
};

export default App;
