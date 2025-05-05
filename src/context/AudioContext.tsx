import React, { createContext, useContext, useState, ReactNode } from 'react';
import { demoTranscript } from '../lib/utils';

export type Segment = {
  start: number;
  end: number;
  speaker: string;
  text: string;
};

export type TranscriptData = {
  segments: Segment[];
  summary: string;
  actionPoints: string[];
  keyTakeaways: string[];
  actionsAndTopics: {
    topics: string[];
  };
};

type TemplateType = 'default' | 'compact' | 'detailed';

type AudioContextType = {
  processing: boolean;
  transcript: TranscriptData | null;
  selectedTemplate: TemplateType;
  uploadAudio: (file: File) => void;
  useDemo: () => void;
  setSelectedTemplate: (template: TemplateType) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [processing, setProcessing] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('default');

  const uploadAudio = async (file: File) => {
    setProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setTranscript(demoTranscript);
      setProcessing(false);
    }, 3000);
  };

  const useDemo = () => {
    setProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setTranscript(demoTranscript);
      setProcessing(false);
    }, 2000);
  };

  return (
    <AudioContext.Provider value={{
      processing,
      transcript,
      selectedTemplate,
      uploadAudio,
      useDemo,
      setSelectedTemplate
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}