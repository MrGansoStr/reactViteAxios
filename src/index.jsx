import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from "./parts/Table";
import Login from "./parts/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
      <Routes>
        <Route index path='/' element={<Table/>}/>
        <Route path='/loginp' element={<Login/>}/>
      </Routes>
  </Router>

)