import axios from 'axios';

const API_URL = 'https://8iooxycyna.execute-api.us-east-1.amazonaws.com/dev';

export const fetchChatbotResponse = async (human: string): Promise<string> => {
    console.log(human)
    try {
        const response = await axios.post(API_URL, { "human" : human });
        return response.data['body'];
    } catch (error) {
        console.error('Error fetching chatbot response:', error);
        throw new Error('Failed to get response from chatbot API');
    }
};