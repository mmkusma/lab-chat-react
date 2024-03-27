import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SendMessageForm = ({ sendMessage }) => {
    const[message, setMessage] = useState('');

    return <Form onSubmit={e => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    }}>
        <InputGroup>
            <Form.Group>
                <Form.Control 
                    type='text' 
                    placeholder='Enter your message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </Form.Group>
            <Button variant='success' type='submit' disabled={!message}>Send</Button>
        </InputGroup>
    
    </Form>
}

export default SendMessageForm;