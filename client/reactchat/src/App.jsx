import  styles from './App.module.scss'
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import { UlMessage, LiMessage } from './Components/UiComponents.jsx/UiComponents';

const socket = io('http://localhost:3000')

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [newMessage, setNewMessage]= useState('');
  const [message, setMessage]= useState([]);

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) => {
      setMessage(message => [...message, data])
    });

    return () => {
      socket.off('connect');
      socket.off('chat_message');
    }
  }, []);

  const sendMessage = () => {
socket.emit('chat_message', {
  usuario: socket.id, 
  mensaje: newMessage 
})
  };

  return (
    <div className={styles.container}>

      <h2>{isConnected ? 'Conectado' : 'No conectado'}</h2>

      
        <ul className={styles.liMessage}>

        {message.map(message => (
        <li className={styles.ulMessage}>{message.usuario}:{message.mensaje}</li>
      ))}

        </ul>
     

      <input 
      type="text" 
      onChange={e=>setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Inviare</button>

    </div>
  )
}

export default App
