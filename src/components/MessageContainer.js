
const MessageContainer = ({messages}) => <div>
    {messages.map((message, index) => <div key={index}>
        <p>{message.username}: {message.message}</p>
    </div>)}
</div>;

export default MessageContainer;