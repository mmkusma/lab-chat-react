import { Button, Form } from "react-bootstrap";
import { useState } from "react";


const WaitingRoom = ({ joinChatRoom }) => {
    const[username, setUsername] = useState('');
    const[room, setRoom] = useState('');

    return <Form onSubmit={ e => {
            e.preventDefault();
            joinChatRoom(username, room);
        }}>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
            <Form.Label>Room</Form.Label>
            <Form.Control type='text' placeholder='Enter room' onChange={(e) => setRoom(e.target.value)}></Form.Control>
        </Form.Group>
        <Button variant="success" type='submit'>Join Chat Room</Button>
    </Form>;
};

export default WaitingRoom;