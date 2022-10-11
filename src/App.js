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
            <Route exact path="/RegisterForm" element={<RegisterForm />} />
            <Route exact path="/CodeVerification" element={<CodeVerification />} />
            <Route exact path="/" element={<LoginForm />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
