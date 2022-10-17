import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

import './App.css';
import LoginForm from './pages/LoginForm.jsx';
import CodeVerification from './pages/CodeVerification.jsx';
import RegisterForm from './pages/RegisterForm';
import TestSidebar from './components/test-components/TestSidebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/RegisterForm" element={<RegisterForm />} />
            <Route exact path="/CodeVerification" element={<CodeVerification />} />
            <Route exact path="/Sidebar" element={<TestSidebar />} />
            <Route exact path="/" element={<LoginForm />} />
        </Routes>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
