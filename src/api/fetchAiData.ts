import { AIData } from '../types/aiData';

// Fetch function to get AI data
export const fetchAIData = async (): Promise<AIData> => {
  const response = await fetch('/ai-data.json');
  if (!response.ok) {
    throw new Error('Failed to fetch AI data');
  }
  const data = await response.json();
  return data;
};
