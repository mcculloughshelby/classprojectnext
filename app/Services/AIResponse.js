"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import dotenv from "dotenv";
import { info,careers } from "./info";
dotenv.config(); // Load environment variables
// Access your API key as an environment variable 
// We will access it just like we accessed DATABASE_URL
const genAI = new GoogleGenerativeAI(process.env.API_KEY);


export default async function GetResponse(message) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"  });


  const result = await model.generateContent({
    contents: [
        {
          role: "user",
          parts: [
            { text: message },
           
          ]
        }
      ],


    systemInstruction: {
        parts: [
          {
            "text": info
          },
          {"text":careers},
          //{"text":tone}
        ]
      }


  }


  );
  const response = result.response;
  const text = response.text();
  console.log(text);
  return text;
}


