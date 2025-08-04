"use client";

import { useEffect, useRef, useState, FormEvent, KeyboardEvent, MouseEvent as ReactMouseEvent } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { BotMessageSquareIcon } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatbotWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [flags, setFlags] = useState({ hasName: false, hasCompany: false, hasIndustry: false, hasEmail: false, hasPhone: false });
  const [userID, setUserID] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const INITIAL_X = 750;
  const INITIAL_Y = 30;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      if (!isMobile) {
        el.style.left = `${INITIAL_X}px`;
        el.style.top = `${INITIAL_Y}px`;
      } else {
        el.style.left = "1rem";
      el.style.top = "auto";
      el.style.bottom = "8rem";
      }
    }
    return () => {
      if (el) {
        el.style.left = `${INITIAL_X}px`;
        el.style.top = `${INITIAL_Y}px`;
      }
    };
  }, [isMobile]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.style.position = "fixed";
    el.style.cursor = "grab";

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onDblClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      dragging = true;
      el.style.cursor = "grabbing";
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp, { once: true });
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    };

    const onPointerUp = () => {
      dragging = false;
      el.style.cursor = "grab";
      document.removeEventListener("pointermove", onPointerMove);
    };

    el.addEventListener("dblclick", onDblClick);
    return () => {
      el.removeEventListener("dblclick", onDblClick);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  useEffect(() => {
    const KEY = "uptekyUserID";
    let storedID = localStorage.getItem(KEY);
    if (storedID) {
      const then = new Date(storedID).getTime();
      if (Date.now() - then > 2 * 60 * 60 * 1000) {
        storedID = new Date().toISOString();
        localStorage.setItem(KEY, storedID);
      }
    } else {
      storedID = new Date().toISOString();
      localStorage.setItem(KEY, storedID);
    }
    setUserID(storedID);
  }, []);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: "bot", text: "Hello! I'm UptekyBot, an AI Assistant for Upteky Solutions. May I have your full name?" }]);
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim()) return;
    setInput("");
    const userMsg: Message = { sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    try {
      const { data } = await axios.post("https://chatbot.upteky.com/chat", { userID, conversation: [...messages, userMsg], flags });
      setMessages(prev => [...prev, { sender: "bot", text: data.reply }]);
      if (data.flags) setFlags(data.flags);
    } catch {
      setMessages(prev => [...prev, { sender: "bot", text: "Sorry, something went wrong." }]);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div
      ref={containerRef}
      style={{ zIndex: 1000 }}
      className="fixed h-[70vh] sm:h-[520px] w-[92vw] max-w-[380px] min-w-[260px] sm:min-w-[340px] sm:w-[380px] bg-[hsl(205.71,7.87%,17.45%)] rounded-lg shadow-2xl border border-gray-200/20 overflow-hidden"
    >
      <div className="h-full flex flex-col">
        <div className="absolute -left-28 sm:-left-32 top-2 text-white bg-[#3C2F2F] border border-[#5a4b4b] px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
          💬 Talk with us
        </div>

        <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-[hsl(25.7,17.1%,16.1%)] to-[hsl(24.9,66.7%,55.3%)] shadow-md">
          <div className="flex flex-col text-white w-full">
            <span className="text-sm sm:text-base font-semibold">Chat with UptekyBot</span>
            <span className="text-xs sm:text-sm text-white/75 mt-0.5">We typically reply in a few minutes.</span>
          </div>
        </div>

        <div className="flex-1 p-2 sm:p-4 overflow-y-auto bg-[hsl(210,7.89%,14.9%)] flex flex-col gap-2 sm:gap-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[88%] sm:max-w-[75%] p-2 sm:p-3 rounded-2xl text-xs sm:text-sm leading-relaxed break-words shadow-md transition-all duration-200 ${msg.sender === "user" ? "bg-[#FFC773] text-black" : "bg-white/95 text-black"}`}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex items-center p-2 sm:p-4 border-t border-white/10 bg-[hsl(210,7.89%,14.9%)]">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            rows={1}
            className="flex-1 resize-none p-2 sm:p-3 rounded-lg bg-[hsl(205.71,7.87%,17.45%)] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 mr-2 text-xs sm:text-sm"
          />
          <Button type="submit" size="default" className="bg-accent hover:bg-accent/90 transition-all duration-200 hover:scale-105 flex items-center justify-center">
            <BotMessageSquareIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}