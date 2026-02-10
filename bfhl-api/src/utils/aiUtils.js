const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

exports.getAIResponse = async (question) => {
    try {
        const prompt = `Question: ${question}\n\nInstructions: Provide a strictly single-word answer.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.error("AI Error:", error); 
        return "AI_Service_Unavailable";
    }
};