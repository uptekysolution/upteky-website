// src/components/VoicebotWidget.tsx
"use client";

import { useEffect, useRef, MouseEvent, useCallback } from "react";
import { useVoiceBot } from "@/hooks/useVoiceBot";
import AudioPlayerSingle from "@/hooks/AudioPlayerSingle";
import { getVoicebotId } from "@/hooks/voicebotId";

export default function VoiceBot() {
  const { status, startRecording, stopRecording, startConversation, onBotSpeechEnded } = useVoiceBot();
  const eyeLeftRef = useRef<HTMLDivElement>(null);
  const eyeRightRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const INITIAL_X = 790,
    INITIAL_Y = 30;

  // 1️⃣ Auto-start on mount, auto-stop on unmount
  useEffect(() => {
    // startRecording();
    startConversation();
    getVoicebotId();
    // stopRecording();
    // startRecording();
    return () => {
      stopRecording();
    };
  }, []);

  useEffect(() => {
    // Eye follow logic
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current || !eyeLeftRef.current || !eyeRightRef.current)
        return;
      const rect = orbRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = ((e.clientX - centerX) / 100) * 5;
      const offsetY = ((e.clientY - centerY) / 100) * 5;
      eyeLeftRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      eyeRightRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove as any);
    return () =>
      document.removeEventListener("mousemove", handleMouseMove as any);
  }, []);

  // Dragging logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 640;

    if (!isMobile) {
      container.style.left = `${INITIAL_X}px`;
      container.style.top = `${INITIAL_Y}px`;
    } else {
      container.style.left = "1rem";
      container.style.top = "auto";
      container.style.bottom = "8rem";
    }

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onDblClick = (e: globalThis.MouseEvent) => {
      const rect = container.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      dragging = true;
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp, { once: true });
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      container.style.left = `${e.clientX - offsetX}px`;
      container.style.top = `${e.clientY - offsetY}px`;
    };

    const onPointerUp = () => {
      dragging = false;
      container.style.cursor = "grab";
      document.removeEventListener("pointermove", onPointerMove);
    };

    container.addEventListener("dblclick", onDblClick);
    container.style.position = "fixed";
    container.style.cursor = "grab";
    container.style.right = "auto";

    return () => {
      container.removeEventListener("dblclick", onDblClick);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      container.style.left = `${INITIAL_X}px`;
      container.style.top = `${INITIAL_Y}px`;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ zIndex: 1000 }}
      className="fixed left-4 bottom-4 sm:left-[790px] sm:top-[30px] sm:bottom-auto w-[clamp(280px,90vw,380px)] h-[clamp(400px,90vh,520px)] bg-[hsl(205.71,7.87%,17.45%)] rounded-xl shadow-2xl border border-gray-200/20 overflow-hidden z-50"
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-[hsl(25.7,17.1%,16.1%)] to-[hsl(24.9,66.7%,55.3%)] shadow-md">
          <div className="flex flex-col text-white w-full">
            <span className="text-base sm:text-base font-semibold">
              Talk with Upteky VoiceBot
            </span>
            <span className="text-xs sm:text-sm text-white/75 mt-0.5">
              Voice interaction enabled. Speak to interrupt !
            </span>
          </div>
        </div>

        {/* Main Orb Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 bg-[hsl(210,7.89%,14.9%)]">
          <div className="orb-wrapper w-full max-w-[280px] h-[clamp(180px,45vw,280px)]">
            <div className="orb-ring ring1"></div>
            <div className="orb-ring ring2"></div>
            <div className={`voice-orb ${status}`} ref={orbRef}>
              <div className="orb-eyes">
                <div className="eye" ref={eyeLeftRef}></div>
                <div className="eye" ref={eyeRightRef}></div>
                {/* <div className="text-xs sm:text-sm">Status: {status}</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Audio Controls (bottom) */}
        <div className="p-2 sm:p-4 border-t border-white/10 bg-[hsl(210,7.89%,14.9%)] flex items-center justify-between">
          <div className="text-white/70 text-xs sm:text-sm capitalize">
            {status === "Thinking" ? "Thinking..." : status}
          </div>
          <AudioPlayerSingle onEnded={onBotSpeechEnded} />
        </div>
      </div>

      <style>{`
        .orb-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
        .orb-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .ring1 {
          width: clamp(130px, 35vw, 260px);
          height: clamp(130px, 35vw, 260px);
          border: 2px solid #ff660033;
          animation: rotateRing 10s linear infinite;
          z-index: 0;
        }
        .ring2 {
          width: clamp(145px, 40vw, 290px);
          height: clamp(145px, 40vw, 290px);
          border: 1px dashed #ffa73344;
          z-index: 0;
        }
        .voice-bot-container.listening .ring2 {
          animation: heartbeatRing 1.2s ease-in-out infinite;
        }
        .voice-orb {
          width: clamp(140px, 30vw, 200px);
          height: clamp(140px, 30vw, 200px);
          background: linear-gradient(135deg, #ff6600, #ffb347, #ffd966, #ff6600);
          background-size: 500% 500%;
          border-radius: 50%;
          box-shadow: 0 0 60px #ff660080, inset 0 0 40px #ffc96a88;
          position: relative;
          z-index: 1;
          overflow: hidden;
          filter: drop-shadow(0 0 25px rgba(255, 102, 0, 0.5));
          transition: all 0.3s ease-in-out;
        }
        .orb-eyes {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: clamp(10px, 5vw, 30px);
          pointer-events: none;
          z-index: 3;
        }
        .eye {
          width: clamp(12px, 4vw, 22px);
          height: clamp(20px, 5vw, 38px);
          background: white;
          border-radius: 50%/40%;
          transition: transform 0.1s ease;
          box-shadow: 0 0 5px #fff8;
        }
        .voice-orb.listening {
          animation: colorFlow 10s ease-in-out infinite, breathing 3s ease-in-out infinite;
        }
        .voice-orb.thinking {
          animation: colorFlow 10s ease-in-out infinite, brainwave 2.5s ease-in-out infinite;
          box-shadow: 0 0 80px #ffaa33aa, inset 0 0 50px #ffeedd88;
        }
        .voice-orb.speaking {
          animation: colorFlow 10s ease-in-out infinite, bounce 0.7s ease-in-out infinite, pulseGlow 2s ease-in-out infinite;
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heartbeatRing {
          0%,100%{transform:scale(1);opacity:0.7;}
          25%{transform:scale(1.1);opacity:1;}
          50%{transform:scale(1.2);opacity:0.8;}
          75%{transform:scale(1.05);opacity:1;}
        }
        @keyframes colorFlow {
          0%,100%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
        }
        @keyframes breathing {
          0%,100%{transform:scale(1);}
          50%{transform:scale(1.05);}
        }
        @keyframes brainwave {
          0%,100%{border-radius:50% /50%;}
          25%{border-radius:60% 45% 55% 40% /40% 60% 45% 55%;}
          50%{border-radius:45% 60% 40% 55% /55% 45% 60% 40%;}
          75%{border-radius:55% 40% 60% 45% /45% 55% 40% 60%;}
        }
        @keyframes bounce {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }
        @keyframes pulseGlow {
          0%,100%{box-shadow:0 0 50px #ff660088, inset 0 0 30px #ffcc88;}
          50%{box-shadow:0 0 90px #ff9900cc, inset 0 0 50px #ffeebb;}
        }
      `}</style>
    </div>
  );
}
