import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check, LayoutGrid, FileText, ListFilter } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAudio } from '../context/AudioContext';
import { motion } from 'framer-motion';

export function TemplateSelector() {
  const { selectedTemplate, setSelectedTemplate } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Select.Root value={selectedTemplate} onValueChange={setSelectedTemplate}>
        <Select.Trigger
          className="inline-flex items-center justify-between rounded-md px-3 py-2 text-sm bg-white border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 data-[placeholder]:text-slate-500 gap-1"
          aria-label="Template"
        >
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Template:</span>
            <Select.Value className="font-medium text-primary" />
          </div>
          <Select.Icon>
            <ChevronDown size={16} className="text-slate-500" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="overflow-hidden bg-white rounded-md shadow-md border border-slate-200 mt-1 z-50"
            position="popper"
            sideOffset={5}
            align="center"
            side="bottom"
          >
            <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-slate-700 cursor-default">
              <ChevronDown size={16} className="rotate-180" />
            </Select.ScrollUpButton>
            
            <Select.Viewport className="p-1">
              <TemplateOption value="default" icon={<FileText size={16} />} label="Default (Transcript)" />
              <TemplateOption value="compact" icon={<ListFilter size={16} />} label="Compact (Summary)" />
              <TemplateOption value="detailed" icon={<LayoutGrid size={16} />} label="Detailed (Summary)" />
            </Select.Viewport>
            
            <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-slate-700 cursor-default">
              <ChevronDown size={16} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </motion.div>
  );
}

interface TemplateOptionProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

function TemplateOption({ value, label, icon }: TemplateOptionProps) {
  return (
    <Select.Item
      value={value}
      className={cn(
        "relative flex items-center gap-2 px-8 py-2 text-sm rounded-md select-none outline-none data-[highlighted]:bg-slate-50 data-[highlighted]:text-primary data-[state=checked]:text-primary cursor-pointer"
      )}
    >
      <Select.ItemIndicator className="absolute left-2 inline-flex items-center justify-center">
        <Check size={16} />
      </Select.ItemIndicator>
      {icon && <span className="text-slate-500">{icon}</span>}
      <Select.ItemText>{label}</Select.ItemText>
    </Select.Item>
  );
}