import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";

const ChatRoom = ({messages, sendMessage}) => <div>
    <Row>
        <Col sm='10'>
            <h2 className='font-weight-light'>Chat Room</h2>
        </Col>
    </Row>
    <Row>
        <Col sm='12'>
            <MessageContainer messages={messages} />
        </Col>
    </Row>
    <Row>
        <Col sm='12'>
            <SendMessageForm sendMessage={sendMessage} />
        </Col>
    </Row>
    
</div>

export default ChatRoom;