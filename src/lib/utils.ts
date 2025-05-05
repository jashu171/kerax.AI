import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function generateRandomId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export const demoTranscript = {
  segments: [
    { start: 0, end: 4, speaker: 'Alice', text: 'Okay team, let\'s kick off this project planning meeting. First item: defining the core features for V1.' },
    { start: 5, end: 10, speaker: 'Bob', text: 'Agreed. I think user authentication is non-negotiable. We need secure login and registration from the start.' },
    { start: 10, end: 16, speaker: 'Charlie', text: 'Absolutely. And along with that, basic profile management – letting users update their email and password.' },
    { start: 16, end: 22, speaker: 'Alice', text: 'Good point, Charlie. What about the main functionality? For the \'Meeting Scribe\' app, transcription has to be core.' },
    { start: 22, end: 28, speaker: 'Bob', text: 'Right. We need the ability to upload an audio file and get a text transcript back. Speaker diarization would be a huge plus for V1.' },
    { start: 29, end: 35, speaker: 'Charlie', text: 'Diarization might be complex for V1. Maybe just the raw transcript first? We can add speaker labels in V2.' },
    { start: 36, end: 41, speaker: 'Alice', text: 'I lean towards including diarization if feasible. It adds significant value. What\'s the technical challenge level, Bob?' },
  ],
  summary: 'The team discussed core features for the V1 of the Meeting Scribe app, focusing on user authentication, profile management, and audio transcription. There was debate on whether to include speaker diarization in the initial release, with Alice favoring inclusion despite potential technical challenges.',
  actionPoints: [
    'Bob: Investigate transcription APIs with built-in diarization.',
    'Charlie: Start on the UI mockups for these features.'
  ],
  keyTakeaways: [
    'V1 core features include User Authentication (Login/Register) and basic Profile Management.',
    'Audio upload and transcription are core features, with speaker diarization as a desired feature for V1 pending API capabilities.'
  ],
  actionsAndTopics: {
    topics: [
      'Defining core features for V1 of the \'Meeting Scribe\' app.',
      'User authentication (login/registration) and basic profile management',
      'Audio upload and transcription'
    ]
  }
};