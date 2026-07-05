require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

// The SDK will now look for GCP_API_KEY in your .env file
const ai = new GoogleGenAI({ apiKey: process.env.GCP_API_KEY }); 

async function main(msg) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: msg,
  });
  return response.text;
}

module.exports = main;