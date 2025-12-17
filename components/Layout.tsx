import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#FDFCF8] min-h-screen text-stone-800 font-sans selection:bg-rose-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#FDFCF8]/90 backdrop-blur-sm z-50 py-6 px-8 flex justify-between items-center border-b border-stone-100/50">
        <div className="text-xl font-serif italic font-bold tracking-tight">Monday Rabbit</div>
        <nav className="hidden md:flex space-x-8 text-xs tracking-widest uppercase font-medium text-stone-400">
          <a href="#" className="hover:text-stone-800 transition-colors">About</a>
          <a href="#" className="hover:text-stone-800 transition-colors text-stone-800">Showcase</a>
          <a href="#" className="hover:text-stone-800 transition-colors">Process</a>
          <a href="#" className="hover:text-stone-800 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {children}
      </main>

      {/* Footer / Contact Section */}
      <section className="bg-[#FCDD58] py-24 text-center px-4">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-stone-800 mb-6">Contact Us</p>
        <h2 className="text-4xl md:text-5xl font-serif italic font-medium mb-16 max-w-2xl mx-auto leading-tight">
          Let's create something<br/>wonderful together.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border border-stone-800 rounded-full flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="text-xs font-bold tracking-widest mb-1">CALL</div>
            <div className="text-xs text-stone-700">031-546-0340</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border border-stone-800 rounded-full flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="text-xs font-bold tracking-widest mb-1">EMAIL</div>
            <div className="text-xs text-stone-700">goodday@mondayrabbit.co.kr</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border border-stone-800 rounded-full flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-bold tracking-widest mb-1">HOURS</div>
            <div className="text-xs text-stone-700">Mon-Fri 10:00 - 18:00</div>
          </div>
        </div>
      </section>

      {/* Real Footer */}
      <footer className="bg-white py-12 px-8 border-t border-stone-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-[10px] text-stone-400 leading-relaxed">
          <div className="mb-8 md:mb-0">
            <strong className="text-stone-800 block mb-2 text-xs">CUSTOMER CENTER</strong>
            <div className="text-xl text-stone-800 font-serif italic mb-2">031-546-0340</div>
            <p>Weekdays 10:00 - 18:00</p>
            <p>Lunch 12:00 - 13:00</p>
          </div>
          
          <div className="mb-8 md:mb-0">
             <strong className="text-stone-800 block mb-2 text-xs">COMPANY INFO</strong>
             <p>Monday Rabbit Inc.</p>
             <p>CEO: Rabbit Kim</p>
             <p>Address: Pangyo-ro, Bundang-gu, Seongnam-si</p>
          </div>

           <div className="mb-8 md:mb-0">
             <strong className="text-stone-800 block mb-2 text-xs">BANK INFO</strong>
             <p>Shinhan Bank</p>
             <p>110-123-456789</p>
             <p>Holder: Monday Rabbit</p>
          </div>
          
           <div>
             <strong className="text-stone-800 block mb-2 text-xs">FOLLOW US</strong>
             <div className="flex space-x-4">
               <a href="#" className="hover:text-stone-600">Instagram</a>
               <a href="#" className="hover:text-stone-600">Youtube</a>
             </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 flex justify-between text-[10px] text-stone-300">
          <p>© 2024 MONDAY RABBIT. ALL RIGHTS RESERVED.</p>
          <div className="space-x-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};