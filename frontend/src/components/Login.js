import axios from 'axios';
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:8080/auth/login', { username, password });
    if (response.data) {
      localStorage.setItem('token', response.data);
      localStorage.setItem('role', "ROLE_ADMIN");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
