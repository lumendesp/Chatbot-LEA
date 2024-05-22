import React from 'react';
import './style.css';  // Certifique-se de que o caminho está correto

function Chat() {
  return (
    <div className="chatbot">
      <div className="history">
        <div className="logo-history">
          <img src={process.env.PUBLIC_URL + '/assets/logo-lea.png'} alt="Logo LEA" style={{ height: '80px', marginTop: '20px', marginLeft: '20px', marginBottom: '15px' }} />
        </div>
        <div className="history-chat" style={{ color: '#163639' }}>
          <p>Novo Chat</p>
          <p>Pergunta do dia de hoje...</p>
          <p>Pergunta do dia de hoje...</p>
          <p>Pergunta do dia de hoje...</p>
          <p>Pergunta do dia de hoje...</p>
          <p>Pergunta do dia de hoje...</p>
          <p>Pergunta do dia de hoje...</p>
        </div>
      </div>

      <div className="question-chat">
        <div className="logo-chat">
          <img src={process.env.PUBLIC_URL + '/assets/logo-lea.png'} alt="Logo LEA" style={{ height: '180px', marginBottom: '20px' }} />
        </div>
        <div className="input">
          <input id="placeholder-text" type="text" placeholder="Digite sua pergunta..." />
          <a href="#" target="_blank"><img src={process.env.PUBLIC_URL + '/assets/seta.png'} alt="Seta" style={{ height: '20px' }} /></a>
        </div>
      </div>
    </div>
  );
}

export default Chat;
