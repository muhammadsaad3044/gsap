import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LipsTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lipsRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lipsRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 1,
          pin: true,
        }
      });

      // Scale lips to swallow screen
      tl.to(lipsRef.current, {
        scale: 35,
        duration: 1.5,
        ease: 'power3.in'
      });

      // Fade in stars and text
      tl.fromTo(starsRef.current, 
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8 },
        0.8
      );

      tl.fromTo(textRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        1.2
      );

      // Sparkle animation
      gsap.to('.star', {
        opacity: 0.1,
        scale: 0.5,
        duration: 'random(0.5, 1.5)',
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 3,
          from: 'random'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#b8a1d8]">
      {/* Lips Layer (3D Styled) */}
      <div 
        ref={lipsRef}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <div className="w-[400px] h-[300px] relative">
          {/* Top Lip */}
          <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#ff4d6d] to-[#c9184a] rounded-[50%_50%_50%_50%_/_100%_100%_0%_0%] shadow-2xl"></div>
          {/* Bottom Lip */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#ff4d6d] to-[#c9184a] rounded-[50%_50%_50%_50%_/_0%_0%_100%_100%] shadow-2xl"></div>
          {/* Mouth Opening (The portal) */}
          <div className="absolute inset-[15%] bg-[#0a1128] rounded-full overflow-hidden flex items-center justify-center">
             <div className="w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
          </div>
        </div>
      </div>

      {/* Starry Background Layer */}
      <div 
        ref={starsRef}
        className="absolute inset-0 bg-[#0a1128] z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div 
              key={i}
              className="star absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div ref={textRef} className="relative z-30 px-10 text-center">
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase text-white tracking-tighter leading-[0.9]">
            NOW YOU CAN GO AROUND <br />
            <span className="italic text-white/40">SCREAMING AT PEOPLE</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
