import React, { useEffect, useState } from 'react';
import { fetchMessages, sendMessage } from '../../services/api';
import './TeamChat.css';

const TeamChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const loadMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
        };

        loadMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const message = {
                content: newMessage,
                timestamp: new Date().toISOString(),
            };

            await sendMessage(message);
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    return (
        <div className="team-chat">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <span className="timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
                        <span className="content">{msg.content}</span>
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default TeamChat;