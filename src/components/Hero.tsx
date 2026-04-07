import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
      setMousePos({ x: clientX, y: clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center cursor-none"
    >
      {/* Base Layer: The Bold Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-[14vw] font-display font-black leading-[0.75] tracking-tighter uppercase text-black text-center">
          MARVEL <br /> YOUR ROUTINE
        </h1>
      </div>

      {/* Revealed Layer: The Character & Scene */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500"
        style={{
          maskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
        }}
      >
        <div className="w-full h-full bg-[#f8f8f8] flex items-center justify-center relative">
          <img 
            src="https://picsum.photos/seed/marvis-scene/1920/1080" 
            alt="Character Reveal" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Text on top of reveal to match video's layered look */}
          <div className="absolute inset-0 flex items-center justify-center">
             <h1 className="text-[14vw] font-display font-black leading-[0.75] tracking-tighter uppercase text-white mix-blend-difference text-center">
              MARVEL <br /> YOUR ROUTINE
            </h1>
          </div>
        </div>
      </div>

      {/* The "BRUSH!" Cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 z-50 pointer-events-none"
      >
        <div className="w-36 h-36 rounded-full border-2 border-black bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl">
          <span className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-black">Brush!</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-black/40 font-bold">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-black/20"
        />
      </div>
    </section>
  );
}
