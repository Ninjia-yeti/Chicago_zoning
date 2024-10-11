// import OpenAI from "openai";
// import { OpenAIStream, StreamingTextResponse } from "ai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: Request) {
//   try {
//     const { prompt } = await req.json();

//     if (!prompt) {
//       return new Response(JSON.stringify({ error: "Prompt is required" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     const systemMessage: OpenAI.Chat.ChatCompletionSystemMessageParam = {
//       role: "system",
//       content: "You are a helpful AI assistant. Provide clear and concise answers to user queries.",
//     };

//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [systemMessage, { role: "user", content: prompt }],
//       stream: true,
//     });

//     return response
    
//     // Convert the response to a ReadableStream
//     // const stream = OpenAIStream(response);
    
//     // Return the streaming response
//     // return new StreamingTextResponse(stream);
//   } catch (error) {
//     console.error("Error in chat API route:", error);
//     return new Response(
//       JSON.stringify({
//         error: "An error occurred during the chat completion.",
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const systemMessage: OpenAI.Chat.ChatCompletionSystemMessageParam = {
      role: "system",
      content: "You are a helpful AI assistant. Provide clear and concise answers to user queries.",
    };

    // Request without streaming
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, { role: "user", content: prompt }],
    });

    return new Response(JSON.stringify({ content: response.choices[0].message?.content || "" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in chat API route:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred during the chat completion.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
