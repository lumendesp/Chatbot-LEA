import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './style.css';  // Certifique-se de que o caminho está correto
import Temas from './Temas';  // Importa o novo componente Temas
import Chat from './Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, verificar as credenciais com um servidor
    navigate('/temas');
  };

  return (
    <div className="container-login">
      <div className="logo-login">
        <img src={process.env.PUBLIC_URL + '/assets/logo-lea.png'} alt="Logo LEA" style={{ height: '180px', marginLeft: '20px' }} />
      </div>
      <div className="login">
        <h1 style={{ color: '#ab619e' }}>Login</h1>
        <input 
          id="placeholder-text" 
          type="text" 
          placeholder="Usuário" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          id="placeholder-text" 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default App;