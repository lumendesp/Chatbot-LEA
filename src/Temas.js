import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe Link e useNavigate
import './style.css'; // Certifique-se de que o caminho está correto

function Temas() {
  const navigate = useNavigate(); // Obtenha a função navigate do React Router

  // Defina a função handleButtonClick dentro do componente Temas
  const handleButtonClick = (route) => {
    navigate(route); // Navegar para a rota correspondente ao botão clicado
  };

  return (
    <div className="container-temas">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/assets/logo-lea.png'} alt="Logo LEA" style={{ height: '180px' }} />
      </div>
      <div className="question">
        <p style={{ color: '#163639' }}>Sobre qual assunto você tem dúvida?</p>
      </div>
      <div className="buttons">
        {/* Adicione manipuladores de eventos de clique aos botões */}
        <button onClick={() => handleButtonClick('/chat')}>Estomas</button>
        <button onClick={() => handleButtonClick('/chat')}>Câncer de Mama</button>
        <button onClick={() => handleButtonClick('/chat')}>Arboviroses</button>
      </div>
    </div>
  );
}

export default Temas;
