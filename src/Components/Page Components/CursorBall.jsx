import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function CursorBall() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const ballSize = 600; // ✅ Matches w-[200px] h-[200px]

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] -hue-rotate-15  bg-gray-800/20 rounded-full pointer-events-none blur-3xl"
      animate={{
        x: mousePosition.x - ballSize / 2, // ✅ Center horizontally
        y: mousePosition.y - ballSize / 2, // ✅ Center vertically
      }}
      transition={{
        type: "tween",
        ease: "easeOut", // smoother easing
        duration: 0.2, // controls smoothness
      }}
    />
  );
}
