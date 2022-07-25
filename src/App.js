import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";


import Home from './pages/Home/Home';
import Billboard from './pages/Billboard/Billboard';


const App = () => {
  return (

    <BrowserRouter>
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billboard" element={<Billboard />}/>
        </Routes>
    </main>
</BrowserRouter>
  );
}

export default App;
