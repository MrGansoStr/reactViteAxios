import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./parts/Home";
import Login from "./parts/Login";
import Register from "./parts/Register";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
  </Router>

)