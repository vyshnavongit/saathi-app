'use client';

import { useEffect, useState } from 'react';
import { Circle, Square, Triangle, Hexagon, Star } from "lucide-react";

const initialShapes = [
  { id: 1, Icon: Circle, className: "w-12 h-12", x: 10, y: 15, r: -12 },
  { id: 2, Icon: Triangle, className: "w-16 h-16", x: 85, y: 25, r: 45 },
  { id: 3, Icon: Square, className: "w-10 h-10", x: 15, y: 80, r: 12 },
  { id: 4, Icon: Hexagon, className: "w-14 h-14", x: 90, y: 70, r: 60 },
  { id: 5, Icon: Star, className: "w-8 h-8", x: 4, y: 50, r: -45 },
  { id: 6, Icon: Circle, className: "w-6 h-6", x: 95, y: 60, r: 90 },
  { id: 7, Icon: Triangle, className: "w-8 h-8", x: 70, y: 90, r: -30 },
  { id: 8, Icon: Square, className: "w-5 h-5", x: 60, y: 10, r: 12 },
  { id: 9, Icon: Hexagon, className: "w-7 h-7", x: 75, y: 5, r: 15 },
  { id: 10, Icon: Star, className: "w-10 h-10", x: 20, y: 60, r: 180 },
  { id: 11, Icon: Circle, className: "w-5 h-5", x: 40, y: 35, r: -90 },
  { id: 12, Icon: Triangle, className: "w-12 h-12", x: 45, y: 85, r: 75 },
  { id: 13, Icon: Square, className: "w-8 h-8", x: 80, y: 45, r: 45 },
  { id: 14, Icon: Hexagon, className: "w-16 h-16", x: 5, y: 95, r: -12 },
  { id: 15, Icon: Star, className: "w-12 h-12", x: 85, y: 80, r: 120 },
  { id: 16, Icon: Circle, className: "w-14 h-14", x: 60, y: 10, r: 30 },
  { id: 17, Icon: Triangle, className: "w-6 h-6", x: 30, y: 75, r: -60 },
  { id: 18, Icon: Square, className: "w-9 h-9", x: 55, y: 60, r: -15 },
];

export function BackgroundShapes() {
  const [shapes, setShapes] = useState(initialShapes);
  const [blobs, setBlobs] = useState([
    { dx: 0, dy: 0, s: 1 },
    { dx: 0, dy: 0, s: 1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => {
          const deltaX = (Math.random() - 0.5) * 15;
          const deltaY = (Math.random() - 0.5) * 15;
          
          let newX = shape.x + deltaX;
          let newY = shape.y + deltaY;

          if (newX < -10 || newX > 110) newX = shape.x - deltaX;
          if (newY < -10 || newY > 110) newY = shape.y - deltaY;

          return {
            ...shape,
            x: newX,
            y: newY,
            r: shape.r + (Math.random() - 0.5) * 90,
          };
        })
      );

      setBlobs([
        {
          dx: (Math.random() - 0.5) * 10, // Drift -5% to 5%
          dy: (Math.random() - 0.5) * 10,
          s: 1 + (Math.random() - 0.5) * 0.2, // Scale 0.9 to 1.1
        },
        {
          dx: (Math.random() - 0.5) * 10,
          dy: (Math.random() - 0.5) * 10,
          s: 1 + (Math.random() - 0.5) * 0.2,
        }
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base blobs */}
      <div 
        className="absolute top-[40%] left-[5%] w-[800px] h-[600px] transition-transform duration-[5000ms] ease-linear"
        style={{ transform: `translate(${blobs[0].dx}%, ${blobs[0].dy}%) scale(${blobs[0].s}) rotate(45deg)` }}
      >
        <div className="w-full h-full bg-[#C1E1C1] dark:bg-[#1A2E35] rounded-[50%_50%_20%_80%/50%_20%_80%_50%] filter blur-[40px] opacity-65 dark:opacity-30 transition-colors duration-500" />
      </div>
      <div 
        className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] transition-transform duration-[5000ms] ease-linear"
        style={{ transform: `translate(${blobs[1].dx}%, ${blobs[1].dy}%) scale(${blobs[1].s}) rotate(-30deg)` }}
      >
        <div className="w-full h-full bg-[#E6E6FA] dark:bg-[#2A2B3D] rounded-[20%_80%_50%_50%/80%_50%_50%_20%] filter blur-[40px] opacity-70 dark:opacity-30 transition-colors duration-500" />
      </div>

      {/* Floating Elements wrapper handles seamless dark mode color inheritance */}
      <div className="text-cyprus dark:text-[#CF9D7B] transition-colors duration-500">
        {shapes.map((shape) => {
          const Icon = shape.Icon;
          return (
            <div
              key={shape.id}
              className="absolute opacity-50 transition-all duration-[5000ms] ease-linear"
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                transform: `translate(-50%, -50%) rotate(${shape.r}deg)`
              }}
            >
              <Icon className={shape.className} strokeWidth={1.5} />
            </div>
          );
        })}
      </div>
    </div>
  );
}