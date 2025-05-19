# ChatBot using ChatGPT API
This project is a simple, responsive chatbot web application built using HTML, CSS, and JavaScript, integrated with the ChatGPT API (OpenAI). The chatbot interacts with users in a conversational format and responds based on user input using real-time API calls.

# Features
- Clean and responsive UI
- Real-time interaction with ChatGPT via API
- Scrollable chat history
- Easy to integrate and customize

# Technologies Used
- HTML5 – For the structure of the chatbot UI
- CSS3 – For styling the chatbot (flex layout, colors, responsiveness)
- JavaScript (Vanilla) – For handling logic and API integration
- OpenAI ChatGPT API – For generating chatbot responses

# Prerequisites
- A valid OpenAI API Key
- A basic web server (VS Code Live Server or similar) to test locally

# How It Works
- User enters a message in the input field.
- On submit, JavaScript sends the message to the ChatGPT API using fetch().
- The response is parsed and displayed in the chat window dynamically.
- All messages are appended to the chat log, preserving the conversation context (if implemented).
