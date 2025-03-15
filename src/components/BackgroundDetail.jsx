import React from "react";

export function BackgroundDetail() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600 opacity-20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-500 opacity-20 blur-[80px] animate-pulse delay-1000" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-shimmer delay-700" />
    </div>
  );
}
