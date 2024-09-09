import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null); // Reference to the end of the chat

  // Expanded set of responses
  const responses = {
    "hi": "Hello! How can I help you today?",
    "what is your name": "I'm your friendly chatbot.",
    "how are you": "I'm just a program, but I'm doing great! How can I assist you?",
    "bye": "Goodbye! Have a great day!",
    "what is your favorite color": "I don't have a favorite color, but I think blue is nice.",
    "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "what is the weather like": "I'm not sure about the weather right now. You might want to check a weather app.",
    "how old are you": "I'm just a program, so I don't age!",
    "what can you do": "I can answer questions and help with various tasks. What do you need help with?",
    "who created you": "I was created by a team of developers to assist and interact with users.",
    "what is the time": "I don't have the current time. You can check your device's clock for that.",
    "what is the date": "I don't know today's date. Please check your device.",
    "how is the day": "I don't experience days, but I hope you're having a great one!",
    "what is your purpose": "My purpose is to assist you with information and help with tasks.",
    "how do you work": "I use programmed responses and algorithms to interact with you. If you have a question, just ask!",
    "what are your features": "I can answer questions, provide information, and help with various tasks.",
    "where are you from": "I exist on the internet, so I don't have a physical location.",
    "can you help me": "Yes, I can help with many things. What do you need assistance with?",
    "give me a tip": "Always stay curious and keep learning. It will help you grow!",
    "what is your favorite food": "I don't eat, but I've heard pizza is quite popular.",
    "can you tell me a fact": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
    "what is your favorite book": "I don't read books, but many people enjoy classics like 'To Kill a Mockingbird' or '1984'.",
    "what is the capital of France": "The capital of France is Paris.",
    "how do I reset my password": "You can usually reset your password by following the 'Forgot Password' link on the login page of the website you're using.",
    "what is your favorite movie": "I don't watch movies, but 'The Shawshank Redemption' is highly recommended by many.",
    "how tall is the Eiffel Tower": "The Eiffel Tower is approximately 330 meters (1,083 feet) tall.",
    "what is the largest planet": "Jupiter is the largest planet in our solar system.",
    "tell me about AI": "Artificial Intelligence (AI) involves creating systems or machines that can perform tasks that typically require human intelligence, such as understanding natural language and making decisions.",
    "what is machine learning": "Machine Learning is a subset of AI that involves training algorithms to learn from and make predictions based on data.",
    "how do I contact support": "To contact support, visit the 'Contact Us' page on the website, or use the support email or phone number provided.",
    "what is blockchain": "Blockchain is a decentralized digital ledger used to record transactions across multiple computers to ensure that the record is secure and cannot be altered.",
    "who is the president of the USA": "As of my last update, the President of the USA is Joe Biden.",
    "how can I learn coding": "You can learn coding through online courses, tutorials, and practice on platforms like Codecademy, Coursera, or freeCodeCamp.",
    // Add more responses as needed
  };

  const getBotResponse = (userInput) => {
    // Normalize user input
    const normalizedInput = userInput.toLowerCase().trim();

    // Find response
    const response = responses[normalizedInput] || "I’m here to help. Please let me know if you have any questions.";

    return response;
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: getBotResponse(input), sender: "bot" }
      ]);
    }, 1000);
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className='flex flex-col h-full max-w-md mx-auto p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray'>Chatbot</h2>
      
      <div className='flex-1 overflow-y-auto mb-4'>
        <div className='space-y-4'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-gray'}`}>
                {msg.sender === 'bot' ? (
                  <FaUserCircle className='inline-block text-xl mr-2' />
                ) : null}
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} /> {/* Invisible div to scroll into view */}
        </div>
      </div>
      
      <div className='flex items-center'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className='flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg dark:bg-gray-700 dark:text-gray focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          onClick={handleSend}
          className='p-2 bg-blue-500 text-gray rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <IoSend />
        </button>
      </div>
      
      <div className='mt-4 text-right'>
        <a
          href="/"
          className='text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400 transition-colors duration-300'
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Chatbot;
