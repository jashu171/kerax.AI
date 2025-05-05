import React from 'react';
import { useAudio } from '../context/AudioContext';
import { Download, FileText, ListTodo, Lightbulb, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { formatTime } from '../lib/utils';
import { motion } from 'framer-motion';
import { TemplateSelector } from './TemplateSelector';
import { useToast } from './ui/toast';

export function MeetingNotes() {
  const { transcript, selectedTemplate } = useAudio();
  const { showToast } = useToast();
  
  if (!transcript) return null;
  
  const handleDownload = () => {
    showToast({
      title: 'Notes downloaded',
      description: 'Your meeting notes have been downloaded.',
      variant: 'success',
    });
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8"
    >
      <div className="flex items-center justify-between p-6 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Meeting Notes <span className="text-sm font-normal text-slate-500">(Demo)</span></h2>
          <p className="text-slate-600 text-sm">Transcription and generated summaries</p>
        </div>
        <div className="flex items-center gap-3">
          <TemplateSelector />
          <Button
            variant="outline"
            iconLeft={<Download size={16} />}
            onClick={handleDownload}
          >
            Download
          </Button>
        </div>
      </div>

      {selectedTemplate === 'default' && (
        <DefaultTemplate transcript={transcript} />
      )}
      
      {selectedTemplate === 'compact' && (
        <CompactTemplate transcript={transcript} />
      )}
      
      {selectedTemplate === 'detailed' && (
        <DetailedTemplate transcript={transcript} />
      )}
    </motion.div>
  );
}

function DefaultTemplate({ transcript }: { transcript: any }) {
  return (
    <div className="p-6">
      <div className="space-y-4 mb-8">
        {transcript.segments.map((segment: any, index: number) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="transcript-block pl-3 py-2"
          >
            <div className="flex gap-2 items-center mb-1">
              <span className="text-xs font-medium text-slate-500">
                [{formatTime(segment.start)} - {formatTime(segment.end)}]
              </span>
              <span className="font-semibold text-sm text-primary">
                {segment.speaker}:
              </span>
            </div>
            <p className="text-slate-700">{segment.text}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-6 mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[calc(50%-12px)] p-4 rounded-lg border border-slate-200 hover:border-primary/20 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <ListTodo size={18} className="text-primary" />
            <h3 className="font-medium text-slate-900">Action Points</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            {transcript.actionPoints.map((point: string, index: number) => (
              <li key={index} className="flex gap-2 items-baseline">
                <span className="text-primary">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-[calc(50%-12px)] p-4 rounded-lg border border-slate-200 hover:border-primary/20 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={18} className="text-primary" />
            <h3 className="font-medium text-slate-900">Key Takeaways</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            {transcript.keyTakeaways.map((takeaway: string, index: number) => (
              <li key={index} className="flex gap-2 items-baseline">
                <span className="text-primary">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full p-4 rounded-lg border border-slate-200 hover:border-primary/20 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={18} className="text-primary" />
            <h3 className="font-medium text-slate-900">Actions & Topics</h3>
          </div>
          <div className="text-slate-700">
            <div className="font-medium text-slate-800 mb-1">**Topics Discussed:**</div>
            <ul className="space-y-1 mb-4">
              {transcript.actionsAndTopics.topics.map((topic: string, index: number) => (
                <li key={index} className="flex gap-2 items-baseline">
                  <span className="text-primary">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CompactTemplate({ transcript }: { transcript: any }) {
  return (
    <div className="p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 p-4 rounded-lg border border-slate-200"
      >
        <div className="flex items-center gap-2 mb-3">
          <FileText size={18} className="text-primary" />
          <h3 className="font-medium text-slate-900">Meeting Summary</h3>
        </div>
        <p className="text-slate-700">{transcript.summary}</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-4 rounded-lg border border-slate-200 hover:border-primary/20 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <ListTodo size={18} className="text-primary" />
            <h3 className="font-medium text-slate-900">Action Points</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            {transcript.actionPoints.map((point: string, index: number) => (
              <li key={index} className="flex gap-2 items-baseline">
                <span className="text-primary">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 rounded-lg border border-slate-200 hover:border-primary/20 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={18} className="text-primary" />
            <h3 className="font-medium text-slate-900">Key Takeaways</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            {transcript.keyTakeaways.map((takeaway: string, index: number) => (
              <li key={index} className="flex gap-2 items-baseline">
                <span className="text-primary">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

function DetailedTemplate({ transcript }: { transcript: any }) {
  return (
    <div className="p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 p-4 rounded-lg border border-slate-200"
      >
        <div className="flex items-center gap-2 mb-3">
          <FileText size={18} className="text-primary" />
          <h3 className="font-medium text-slate-900">Meeting Summary</h3>
        </div>
        <p className="text-slate-700">{transcript.summary}</p>
      </motion.div>
      
      <div className="flex flex-wrap gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-[calc(50%-12px)] p-4 rounded-lg border border-slate-200 hover:border-primary/20 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <ListTodo size={18} className="text-primary" />
            <h3 className="font-medium text-slate-900">Action Points</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            {transcript.actionPoints.map((point: string, index: number) => (
              <li key={index} className="flex gap-2 items-baseline">
                <span className="text-primary">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[calc(50%-12px)] p-4 rounded-lg border border-slate-200 hover:border-primary/20 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={18} className="text-primary" />
            <h3 className="font-medium text-slate-900">Key Takeaways</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            {transcript.keyTakeaways.map((takeaway: string, index: number) => (
              <li key={index} className="flex gap-2 items-baseline">
                <span className="text-primary">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-lg font-medium text-slate-900 mb-4">Transcript</h3>
        <div className="space-y-4 mb-6">
          {transcript.segments.map((segment: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="transcript-block pl-3 py-2"
            >
              <div className="flex gap-2 items-center mb-1">
                <span className="text-xs font-medium text-slate-500">
                  [{formatTime(segment.start)} - {formatTime(segment.end)}]
                </span>
                <span className="font-semibold text-sm text-primary">
                  {segment.speaker}:
                </span>
              </div>
              <p className="text-slate-700">{segment.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}