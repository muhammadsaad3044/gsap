import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="text-2xl font-display font-black tracking-tighter uppercase">
        Marvis
      </div>
      <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
        <a href="#" className="hover:opacity-50 transition-opacity">Toothpastes</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Limited Editions</a>
        <a href="#" className="hover:opacity-50 transition-opacity">About</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>
      <div className="text-xs font-mono uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer">
        Shop Now
      </div>
    </motion.nav>
  );
}
