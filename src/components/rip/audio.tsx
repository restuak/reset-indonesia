"use client";

import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function AudioPlayer() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/gugurbunga.mp3"
        autoPlay
        loop
        controls
        className="fixed bottom-4 left-4 z-50 hidden"
      />
     
      <button
        onClick={toggleMute}
        className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-bravepink text-white shadow-lg hover:bg-bravepink/80 transition flex items-center justify-center"
        title={muted ? "Unmute" : "Mute"}
      >
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </>
  );
}
