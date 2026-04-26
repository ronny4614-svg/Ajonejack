import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, ArrowRight, Lock, Mail, Github, Twitter, Linkedin } from 'lucide-react';

export default function AntovsWebsite() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Animation configurations based on your JSON requirement
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // --- LOGIN VIEW ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 font-sans text-gray-100">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="bg-gray-900 p-8 rounded-2xl border border-[#00d9ff]/30 shadow-[0_0_30px_rgba(0,217,255,0.15)] max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#00d9ff] to-[#ff006e]">
              ANTOVS
            </h1>
            <p className="text-gray-400 mt-2 text-sm">SECURE ACCESS TERMINAL</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <input type="email" required className="w-full bg-gray-950 border border-gray-800 text-white rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-[#00d9ff] transition-colors" placeholder="operator@antovs.dev" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <input type="password" required className="w-full bg-gray-950 border border-gray-800 text-white rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-[#ff006e] transition-colors" placeholder="••••••••" />
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#00d9ff] to-[#ff006e] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
              INITIALIZE <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- MAIN PORTFOLIO VIEW ---
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-[#ff006e] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter text-white">
            ANT<span className="text-[#00d9ff]">OVS</span>
          </h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            SYSTEM LOGOUT
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Abstract Particle Background placeholder */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00d9ff] via-gray-950 to-gray-950"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-48 h-48 mx-auto bg-gray-900 border-2 border-[#ff006e]/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,0,110,0.2)]">
            {/* 3D Robot Head Mount Point */}
            <span className="text-gray-500 text-sm font-mono">[ 3D ROBOT HEAD CANVAS ]</span>
          </motion.div>

          <motion.h2 initial="hidden" animate="visible" variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight">
            ENGINEERING THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-[#9d00ff] to-[#ff006e]">
              FUTURE BEYOND
            </span>
          </motion.h2>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Full-stack architecture meeting retro-futuristic design. Building organic, fluid, and highly secure digital experiences.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-white">CORE PROTOCOLS</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Interactive 3D', icon: <Cpu className="w-8 h-8 text-[#00d9ff]"/>, desc: 'Immersive Three.js experiences with organic morphing and particle systems.' },
              { title: 'Secure Backend', icon: <Shield className="w-8 h-8 text-[#9d00ff]"/>, desc: 'Enterprise-grade Node.js APIs with JWT, 2FA, and robust rate limiting.' },
              { title: 'High Performance', icon: <Zap className="w-8 h-8 text-[#ff006e]"/>, desc: 'Sub-3s load times, 90+ Lighthouse scores, and responsive fluidity.' }
            ].map((service, i) => (
              <motion.div 
                key={i} whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#00d9ff]/50 transition-colors group"
              >
                <div className="mb-4 p-3 bg-gray-950 rounded-lg inline-block">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center text-gray-500">
        <div className="flex justify-center gap-6 mb-6">
          <Github className="w-6 h-6 hover:text-[#00d9ff] cursor-pointer transition-colors" />
          <Twitter className="w-6 h-6 hover:text-[#00d9ff] cursor-pointer transition-colors" />
          <Linkedin className="w-6 h-6 hover:text-[#00d9ff] cursor-pointer transition-colors" />
        </div>
        <p>© 2026 ANTOVS Systems. Securely Encrypted.</p>
      </footer>
    </div>
  );
}
