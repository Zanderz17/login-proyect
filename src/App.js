import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

import './App.css';
import LoginForm from './components/LoginForm.jsx';
import CodeVerification from './components/CodeVerification.jsx';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/CodeVerification" element={<CodeVerification />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
        </Routes>
       </BrowserRouter>
      

    </div>
  );
}

export default App;
