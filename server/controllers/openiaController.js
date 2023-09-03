const axios = require('axios');

exports.chatGptController = async (req, res) => {
  try {
    // Assuming you're receiving text data from the frontend in the request body
    const { text } = req.body;

    // Modify the options object to use the received text in the query
    const options = {
      method: 'POST',
      url: 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '2c29257622msh4be7374c00f1327p122950jsn599ebe55650f',
        'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
      },
      data: { query: text }
    };

    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data); // Send the API response back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external API.' });
  }
};