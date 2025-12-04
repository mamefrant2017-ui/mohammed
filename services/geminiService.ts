import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const API_KEY = process.env.API_KEY || '';

// System instruction to give the AI context about Mohammed Ali
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Mohammed Ali's personal portfolio website.
Your goal is to answer visitor questions about Mohammed's skills, experience, and projects in a professional, friendly, and concise manner.

Here is Mohammed Ali's profile data:
- Name: Mohammed Ali
- Titles: Fullstack Developer, Freelancer, Teacher, Electronics Technician.
- Location: Addis Ababa, Ethiopia.
- Contact: mamefrant2017@gmail.com, Phone: 0938636225.
- Education: 
    1. Management Degree from Debre Birhan University.
    2. Fullstack Web Development Certificate from Abuki Tech (6 months training).
- Skills: HTML, CSS, JavaScript, Git, Node.js, Bootstrap, React, Python, Databases (SQL/NoSQL), Electronics repair and maintenance.
- Projects: 
    1. Calculator App
    2. Fruit Lover Page (Landing page)
    3. Fruit Lover Box (Subscription box UI)
    4. Alfatih Academy Website (Education platform)
    5. Apple Homepage Clone (UI recreation)
    6. E-commerce Website (Full stack shop)
    7. Various Portfolio Websites.

Tone: Professional, enthusiastic, helpful.
If asked for contact info, provide the email and phone number.
If asked about hiring, encourage them to use the contact form or email directly.
Keep answers relatively short (under 100 words unless detailed explanation is needed).
`;

export const sendMessageToGemini = async (history: Message[], userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, my AI brain isn't connected right now (API Key missing). Please contact Mohammed directly via email.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Construct the chat history for context
    // We don't have persistent chat object in this stateless service wrapper, 
    // so we regenerate context or use generateContent with history if needed.
    // For simplicity in this demo, we will use generateContent with system instruction and the latest prompt, 
    // effectively treating it as a single turn or appending history manually.
    
    // Better approach for a simple portfolio bot: Use chat mode.
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I didn't get a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error processing your request.";
  }
};