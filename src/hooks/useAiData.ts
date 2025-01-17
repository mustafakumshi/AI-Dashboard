import { useQuery } from '@tanstack/react-query'; // For React Query v4
import { fetchAIData } from '../api/fetchAiData';
import { AIData } from '../types/aiData';

// Custom Hook for fetching AI data using React Query
const useAIData = () => {
  return useQuery<AIData, Error>({
    queryKey: ['aiData'], // Query key (array or string)
    queryFn: fetchAIData, // The function that fetches the data
    staleTime: 60000,  // Data is considered fresh for 1 minute
  });
};

export default useAIData;

