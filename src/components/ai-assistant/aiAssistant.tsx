"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Textarea,
  Avatar,
  ScrollShadow,
} from "@nextui-org/react";
import { User, Bot, Send } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  
  
  // const handleSubmit = async () => {
  //   if (!input.trim()) return;
  
  //   const userMessage: Message = { role: "user", content: input };
  //   setMessages((prev) => [...prev, userMessage]);
  //   setInput("");
  //   setIsLoading(true);
  
  //   try {
  //     const response = await fetch("/api/openai", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ prompt: input }),
  //     });
  
  //     if (!response.ok) throw new Error(response.statusText);
  
  //     const data = response.body;
  //     if (!data) return;
  
  //     const reader = data.getReader();
  //     const decoder = new TextDecoder();
  //     let accumulatedResponse = "";
  
  //     setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
  
  //     while (true) {
  //       const { done, value } = await reader.read();
  //       if (done) break;
  
  //       const chunkValue = decoder.decode(value);
  
  //       // Clean up and concatenate the chunk into a proper sentence
  //       const cleanedChunk = chunkValue
  //       .replace(/\d+:/g, "")
  //       .replace(/"/g, "")
  //       .replace(/\s{2,}/g, " ")
  //         // .replace(/(?:\d+:)?"([^"]+)"/g, "$1")  // Remove `0:` prefixes and unnecessary quotes
  //         // .replace(/\n/g, "")                   // Remove newlines
  //         // .replace(/\s+/g, " ")                 // Replace multiple spaces with a single space
  //         .trim();                              // Trim leading and trailing spaces
  
  //       accumulatedResponse += cleanedChunk;
  
  //       setMessages((prev) => {
  //         const lastMessage = prev[prev.length - 1];
  //         if (lastMessage && lastMessage.role === "assistant") {
  //           return [
  //             ...prev.slice(0, -1),
  //             { ...lastMessage, content: accumulatedResponse.trim() },
  //           ];
  //         }
  //         return prev;
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error fetching AI response:", error);
  //     setMessages((prev) => [
  //       ...prev,
  //       { role: "assistant", content: "Sorry, I couldn't process that." },
  //     ]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  
  const handleSubmit = async () => {
    if (!input.trim()) return;
  
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
  
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
  
      if (!response.ok) throw new Error(response.statusText);
  
      // Correctly parse the new response structure
      const { content } = await response.json();
  
      setMessages((prev) => [...prev, { role: "assistant", content: content.trim() }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process that." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  
  

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto h-[90vh] flex items-center shadow-lg rounded-lg">
      <Card className="w-full h-full bg-white rounded-lg">
        <CardHeader className="flex justify-between items-center bg-gray-100 p-4">
          <h4 className="text-xl font-bold text-gray-800">AI Assistant</h4>
        </CardHeader>
        <CardBody>
          <ScrollShadow className="h-[calc(100vh-15rem)] w-full pr-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`flex items-start max-w-[70%] ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar
                    icon={message.role === "user" ? <User /> : <Bot />}
                    className={`w-10 h-10 flex-shrink-0 ${
                      message.role === "user" ? "bg-gray-600" : "bg-gray-400"
                    }`}
                  />
                  <div
                    className={`mx-2 p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="flex items-center bg-gray-100 rounded-lg p-3">
                  <div className="dot-flashing"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </ScrollShadow>
        </CardBody>
        <CardFooter className="border-t border-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex w-full space-x-2 items-center"
          >
            <Textarea
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (textareaRef.current) {
                  textareaRef.current.style.height = "auto"; // Reset height
                  textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height based on scrollHeight
                }
              }}
              onKeyDown={handleKeyDown}
              className="flex-grow bg-white text-gray-800 border-gray-800 min-h-[40px] rounded-lg outline-1"
              classNames={{
                inputWrapper:
                  "rounded-lg hover:border-gray-800 min-h-[18px] h-auto max-h-[120px] overflow-y-auto text-lg",
              }}
              minRows={1}
              maxRows={3}
              ref={textareaRef}
              style={{ overflow: "hidden" }} // Prevent manual resizing
            />

            <Button
              type="submit"
              isDisabled={isLoading || !input.trim()}
              className="bg-gray-800 text-white h-[40px] rounded-md"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIAssistant;
