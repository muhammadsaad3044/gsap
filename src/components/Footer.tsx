export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-6xl font-display font-black uppercase tracking-tighter mb-8">
            Marvis <br />
            <span className="text-white/30 italic">World</span>
          </h2>
          <p className="max-w-sm text-sm text-white/50 font-sans leading-relaxed">
            Join our marvelous community and stay updated on limited editions and exclusive collaborations.
          </p>
          <div className="mt-8 flex gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-b border-white/20 py-2 text-xs font-mono focus:border-white outline-none transition-all w-64"
            />
            <button className="text-xs font-mono uppercase tracking-widest hover:text-white/50 transition-colors">
              Join
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-6">Products</h4>
          <ul className="space-y-3 text-xs font-sans uppercase tracking-widest">
            <li><a href="#" className="hover:text-white/50 transition-colors">Toothpastes</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">Mouthwashes</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">Accessories</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">Sets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-6">Company</h4>
          <ul className="space-y-3 text-xs font-sans uppercase tracking-widest">
            <li><a href="#" className="hover:text-white/50 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">Contacts</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">Sitemap</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
        <div>© 2026 Marvis. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
