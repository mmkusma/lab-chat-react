import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/WaitingRoom';
import ChatRoom from './components/ChatRoom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function App() {

  const [conn, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, room) => {

    try {
      // initialize signalR connection
      const conn = new HubConnectionBuilder()
                    .withUrl('http://localhost:5235/chat')
                    .configureLogging(LogLevel.Information)
                    .build();

      // setup handlers
      conn.on('JoinSpecificChatRoom', (username, message) => {
        setMessages(messages => [...messages, {username, message}]);
      });

      conn.on('ReceiveSpecificMessage', (username, message) => {
        setMessages(messages => [...messages, {username, message}]);
      });

      await conn.start();
      conn.invoke('JoinSpecificChatRoom', {username, room});
      setConnection(conn);

    } catch (e) {
      console.error(e);
    } 
  }

  const sendMessage = (message) => {
    
    try {
      
      conn.invoke('SendMessage', message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row className='my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to chat app</h1>
            </Col>
          </Row>
          <Row className='my-5'>
            <Col sm='12'>
            { !conn 
              ? <WaitingRoom joinChatRoom={joinChatRoom} />
              : <ChatRoom messages={messages} sendMessage={sendMessage} />
            } 
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
