import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FLAVORS = [
  { id: 'classic', name: 'Classic', color: '#1a4d2e' },
  { id: 'whitening', name: 'Whitening', color: '#e5e5e5' },
  { id: 'aquatic', name: 'Aquatic', color: '#0077b6' },
  { id: 'ginger', name: 'Ginger', color: '#d4a373' },
  { id: 'licorice', name: 'Licorice', color: '#1a1a1a' }
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tubesRef = useRef<HTMLDivElement>(null);
  const middleTubeCapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !tubesRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
        }
      });

      // 1. Align tubes to equal height
      tl.to('.tube-item', {
        y: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power3.inOut'
      });

      // 2. Fade out others, focus on middle
      tl.to('.tube-item:not(.middle-tube)', {
        opacity: 0.1,
        scale: 0.7,
        filter: 'blur(4px)',
        duration: 0.8,
      }, '+=0.2');

      // 3. Middle tube pins and moves down slightly to focus
      tl.to('.middle-tube', {
        scale: 1.8,
        y: 50,
        duration: 1.2,
        ease: 'power2.inOut'
      }, '+=0.2');

      // 4. Open the cap (Thakan)
      tl.to(middleTubeCapRef.current, {
        y: -120,
        x: 40,
        rotation: 45,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '+=0.2');

      // 5. Reveal flavor text with a staggered fade
      tl.fromTo('.flavor-info', 
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
        '-=0.5'
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-[#b8a1d8] overflow-hidden">
      <div 
        ref={tubesRef}
        className="absolute inset-0 flex items-center justify-center gap-4 px-10"
      >
        {FLAVORS.map((flavor, i) => {
          const isMiddle = i === 2;
          return (
            <div 
              key={flavor.id}
              className={`tube-item relative w-40 h-[400px] flex flex-col items-center ${isMiddle ? 'middle-tube z-30' : 'z-10'}`}
              style={{ transform: `translateY(${i % 2 === 0 ? '100px' : '-100px'})` }}
            >
              {/* Cap */}
              <div 
                ref={isMiddle ? middleTubeCapRef : null}
                className="w-16 h-10 bg-black rounded-t-lg shadow-lg z-20"
              ></div>
              {/* Body */}
              <div className="w-full flex-1 bg-white rounded-b-2xl shadow-2xl overflow-hidden border-2 border-black/5 flex flex-col items-center py-10">
                <div className="text-3xl font-display font-black uppercase tracking-tighter italic">MARVIS</div>
                <div className="mt-auto text-[8px] font-mono uppercase tracking-widest opacity-30">{flavor.name}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flavor Info (Hidden initially) */}
      <div className="flavor-info absolute bottom-20 left-1/2 -translate-x-1/2 text-center pointer-events-none z-40">
        <h3 className="text-4xl font-display font-black uppercase tracking-tighter text-black">Aquatic Mint</h3>
        <p className="text-xs font-mono uppercase tracking-widest text-black/50 mt-2">A breath of fresh air from the Mediterranean.</p>
      </div>
    </div>
  );
}
