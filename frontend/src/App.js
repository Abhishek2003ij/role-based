import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Event from './components/Event';
import Login from './components/Login';

function App() {
  const isAdmin = localStorage.getItem("role") === "ROLE_ADMIN";

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event/create" element={isAdmin ? <Event /> : <Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
