import React from 'react';
import { Header } from './components/Header';
import { GetStarted } from './components/GetStarted';
import { MeetingNotes } from './components/MeetingNotes';
import { useAudio } from './context/AudioContext';
import { motion } from 'framer-motion';

function App() {
  const { processing, transcript } = useAudio();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GetStarted />
        </motion.div>
        
        {(transcript && !processing) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <MeetingNotes />
          </motion.div>
        )}
        
        {(!transcript && !processing) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center text-gray-500"
          >
            <p>Upload or select demo audio to generate notes.</p>
          </motion.div>
        )}
      </main>
      
      <footer className="py-6 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2025 Kerax.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;