import React, { useState } from 'react';
import './Chatbot.scss'; // Adjust the path based on your project structure
import { fetchChatbotResponse } from '../apiservice/Chatservice';


const Chatbot: React.FC = () => {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>(['Bot: Hello! How can i help you?']);

    const handleSendMessage = async () => {
        if (!userMessage.trim()) return;

        setChatHistory((prev) => [...prev, `You: ${userMessage}`]);
        try {
            const botResponse = await fetchChatbotResponse(userMessage);
            setChatHistory((prev) => [...prev, `Bot: ${botResponse}`]);
        } catch (error) {
            setChatHistory((prev) => [...prev, 'Bot: Failed to fetch response.']);
        }
        setUserMessage('');
    };

    return (
        <div className='chatbot-container'>
            <div className='chat-header'>Chatbot</div>
            <div className='chat-history'>
                {chatHistory.map((msg, index) => (
                    <div
                        key={index}
                        className={`chat-message ${
                            msg.startsWith('You:') ? 'user' : 'bot'}`}
                    >
                        {msg}
                    </div>
                ))}
            </div>
            <div className='chat-input-container'>
                <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className='chat-input'
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage} className='chat-send-button'>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
