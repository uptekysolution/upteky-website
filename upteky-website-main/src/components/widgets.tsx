// src/components/widgets.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, MicIcon, BotIcon } from "lucide-react";
import { getVoicebotId, clearVoicebotId } from "@/hooks/voicebotId";
import ChatbotWidget from "./ChatbotWidget";
import VoicebotWidget from "./VoicebotWidget";

export default function MainBotLauncher() {
  const [expanded, setExpanded] = useState(false);
  const [selectedBot, setSelectedBot] = useState<"chatbot" | "voicebot" | null>(null);
  const [showTooltip, setShowTooltip] = useState(true);

  const closeAnyBot = () => {
    // if voicebot was open, send its end-session first:
    if (selectedBot === "voicebot") {
      const id = getVoicebotId();
      navigator.sendBeacon(
        "https://voicebot.upteky.com/voice-chat/end-session",
        // "http://localhost:4003/voice-chat/end-session",
        JSON.stringify({ voicebotID: id })
      );
    }
    clearVoicebotId();
    setSelectedBot(null);
  };

  // replace handleMainClick with:
  const handleMainClick = () => {
    if (selectedBot) {
      // closing whichever bot is open
      closeAnyBot();
    } else {
      setExpanded((v) => !v);
    }
    setShowTooltip(false);
  };

  const launchBot = (type: "chatbot" | "voicebot") => {
    setSelectedBot(type);
    setExpanded(false);
  };

  useEffect(() => {
    if (!selectedBot && !expanded) setShowTooltip(true);
  }, [selectedBot, expanded]);

  return (
    <div className="fixed bottom-8 right-6 z-50 flex items-center gap-3">
      <style>{`
        @keyframes popLeft {0%{transform:translate(0,0) scale(0.5); opacity:0;}100%{transform:translate(-70px,-10px) scale(1); opacity:1;}}
        @keyframes popTop {0%{transform:translate(0,0) scale(0.5); opacity:0;}100%{transform:translate(0,-80px) scale(1); opacity:1;}}
      `}</style>

      {/* Main Button */}
      <div className="relative group">
        {showTooltip && !selectedBot && (
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#1a1a1a] text-orange-400 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-orange-600 whitespace-nowrap">
            🚀 Launch Assistant
          </div>
        )}
        <Button
          onClick={handleMainClick}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg transition-transform duration-300 hover:scale-105 p-0 overflow-hidden flex items-center justify-center"
        >
          {selectedBot ? (
            <X className="h-2 w-2 text-white" />
          ) : (
            <img src="/assets/chat-bot3.png" alt="Assistant" className="h-14 w-14 object-contain mx-auto my-auto" />
          )}
        </Button>
      </div>

      {/* Bot Options */}
      {expanded && !selectedBot && (
        <>
          {/* Chatbot Icon */}
          <div
            className="absolute bottom-8 right-6 group animate-[popLeft_0.4s_ease-out_forwards]"
            onClick={() => launchBot("chatbot")}
          >
            <div className="absolute -left-28 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#1a1a1a] text-orange-400 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-orange-600 whitespace-nowrap">
               Chat With Us
            </div>
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer flex items-center justify-center">
              <BotIcon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Voicebot Icon */}
          <div
            className="absolute bottom-6 right-6 group animate-[popTop_0.4s_ease-out_forwards]"
            onClick={() => launchBot("voicebot")}
          >
            <div className="absolute -left-28 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#1a1a1a] text-orange-400 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-orange-600 whitespace-nowrap">
              Talk With Us
            </div>
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer flex items-center justify-center">
              <MicIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </>
      )}

      {/* Render selected widget */}
      {selectedBot === "chatbot" && <ChatbotWidget />}
      {selectedBot === "voicebot" && <VoicebotWidget />}
    </div>
  );
}
