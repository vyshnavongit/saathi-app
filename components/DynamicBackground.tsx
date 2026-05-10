'use client';

import { useEffect, useState } from 'react';

export default function DynamicBackground() {
  const [bgClass, setBgClass] = useState('');
  const [positions, setPositions] = useState([
    { x: 20, y: 20, r: 0, s: 1 },
    { x: 80, y: 30, r: 45, s: 1.2 },
    { x: 50, y: 80, r: 90, s: 0.8 },
    { x: 30, y: 60, r: 180, s: 1.1 },
  ]);

  useEffect(() => {
    // Define the gradient themes we want to cycle through
    const colors = [
      'from-slate-100 to-blue-50 dark:from-slate-950 dark:to-blue-950',
      'from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950',
      'from-indigo-100 to-purple-50 dark:from-indigo-950 dark:to-purple-950',
      'from-purple-50 to-slate-100 dark:from-purple-950 dark:to-slate-950',
    ];
    let i = 0;
    setBgClass(colors[0]);

    const interval = setInterval(() => {
      i = (i + 1) % colors.length;
      setBgClass(colors[i]);
      
      // Generate random positions, rotations, and scales for the floating shapes
      setPositions((prev) => {
        // 1. Calculate proposed next positions
        const next = prev.map((pos) => {
          // Calculate a random distance to drift (-20% to +20% of the viewport)
          const deltaX = (Math.random() - 0.5) * 40; 
          const deltaY = (Math.random() - 0.5) * 40;
          
          // Keep shapes within bounds (-10% to 110%) so they don't drift completely off-screen
          let newX = pos.x + deltaX;
          let newY = pos.y + deltaY;
          if (newX < -10 || newX > 110) newX = pos.x - deltaX;
          if (newY < -10 || newY > 110) newY = pos.y - deltaY;
          
          return {
            x: newX,
            y: newY,
            r: pos.r + (Math.random() - 0.5) * 90, // Smoothly rotate by up to 45 degrees
            s: Math.random() * 0.6 + 0.8,          // Scale between 0.8 and 1.4
          };
        });

        // 2. Check for collisions and repulse shapes that get too close
        const MIN_DIST = 25; // 25% of the viewport minimum distance threshold
        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const dx = next[i].x - next[j].x;
            const dy = next[i].y - next[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < MIN_DIST && distance > 0) {
              // They are too close, calculate a force to push them apart
              const pushFactor = (MIN_DIST - distance) / 2;
              const pushX = (dx / distance) * pushFactor;
              const pushY = (dy / distance) * pushFactor;

              next[i].x += pushX;
              next[i].y += pushY;
              next[j].x -= pushX;
              next[j].y -= pushY;
            }
          }
        }
        
        return next;
      });
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      // Added overflow-hidden to prevent scrollbars when shapes move near the edges
      className={`fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br transition-colors duration-[5000ms] ease-in-out ${bgClass}`}
    >
      {/* Floating Circle */}
      <div
        className="absolute w-[20vw] h-[20vw] rounded-full bg-purple-500/10 dark:bg-purple-400/10 transition-all duration-[5000ms] ease-linear"
        style={{ left: `${positions[0].x}%`, top: `${positions[0].y}%`, transform: `translate(-50%, -50%) rotate(${positions[0].r}deg) scale(${positions[0].s})` }}
      />
      
      {/* Floating Star */}
      <div
        className="absolute w-[15vw] h-[15vw] bg-yellow-500/10 dark:bg-yellow-400/10 transition-all duration-[5000ms] ease-linear"
        style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', left: `${positions[1].x}%`, top: `${positions[1].y}%`, transform: `translate(-50%, -50%) rotate(${positions[1].r}deg) scale(${positions[1].s})` }}
      />
      
      {/* Floating Polygon (Hexagon) */}
      <div
        className="absolute w-[18vw] h-[18vw] bg-blue-500/10 dark:bg-blue-400/10 transition-all duration-[5000ms] ease-linear"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', left: `${positions[2].x}%`, top: `${positions[2].y}%`, transform: `translate(-50%, -50%) rotate(${positions[2].r}deg) scale(${positions[2].s})` }}
      />

      {/* Floating Triangle */}
      <div
        className="absolute w-[12vw] h-[12vw] bg-rose-500/10 dark:bg-rose-400/10 transition-all duration-[5000ms] ease-linear"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', left: `${positions[3].x}%`, top: `${positions[3].y}%`, transform: `translate(-50%, -50%) rotate(${positions[3].r}deg) scale(${positions[3].s})` }}
      />
    </div>
  );
}