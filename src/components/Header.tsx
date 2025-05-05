import React from 'react';
import { motion } from 'framer-motion';
import { Mic, HelpCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center max-w-7xl">
        <div className="flex-1">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center gap-2"
          >
            <HelpCircle size={18} />
            <span>Help</span>
          </motion.button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white">
              <Mic size={24} />
            </div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
              Kerax.ai
            </h1>
          </div>
          <p className="text-sm text-slate-500">
            Your AI-powered meeting assistant for transcription and summarization.
          </p>
        </motion.div>
        
        <div className="flex-1"></div>
      </div>
    </header>
  );
}