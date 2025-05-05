import React, { useRef } from 'react';
import { Button } from './ui/button';
import { Upload, Play, Mic } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { motion } from 'framer-motion';
import { useToast } from './ui/toast';

export function GetStarted() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadAudio, useDemo, processing } = useAudio();
  const { showToast } = useToast();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('audio/')) {
        uploadAudio(file);
        showToast({ 
          title: 'Audio upload started', 
          description: 'Your audio file is being processed...',
          variant: 'default'
        });
      } else {
        showToast({ 
          title: 'Invalid file type', 
          description: 'Please upload an audio file.',
          variant: 'error'
        });
      }
    }
  };

  const handleDemoClick = () => {
    useDemo();
    showToast({ 
      title: 'Demo started', 
      description: 'Loading demo audio file...',
      variant: 'default'
    });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-slate-900 mb-2"
        >
          Get Started
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 mb-6"
        >
          Upload your meeting recording, use our demo, or start a live recording (coming soon).
        </motion.p>
        
        <div className="flex flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="audio/*" 
              className="hidden" 
            />
            <Button 
              variant="primary" 
              size="lg" 
              iconLeft={<Upload size={16} />}
              onClick={handleUploadClick}
              loading={processing}
              disabled={processing}
            >
              Upload Audio
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              iconLeft={<Play size={16} />}
              onClick={handleDemoClick}
              loading={processing}
              disabled={processing}
            >
              Use Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              iconLeft={<Mic size={16} />}
              disabled={true}
            >
              Record Live Meeting (Coming Soon)
            </Button>
          </motion.div>
        </div>
      </div>
      
      {processing && (
        <div className="bg-slate-50 p-6 border-t border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-full bg-slate-200 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-pink-500 to-rose-600 h-2 rounded-full animate-gradient"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
            <span className="text-sm font-medium text-slate-600 whitespace-nowrap">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}