import { useQuery } from '@tanstack/react-query';
import { fetchAIData } from '../api/fetchAiData';
import { useDispatch } from 'react-redux';
import { setAIData, setLoading, setError, resetLoading } from '../store/aiDataSlice';
import { AIData } from '../types/aiData';
import { useEffect } from 'react';

// Custom Hook for fetching AI data using React Query
const useAIData = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading, isFetching, isError, isSuccess } = useQuery<AIData, Error>({
    queryKey: ['aiData'], 
    queryFn: fetchAIData, 
    staleTime: 60000, // Data considered fresh for 1 minute
  });

  // Dispatching loading state when data is being fetched
  useEffect(() => {
    if (isLoading || isFetching) {
      dispatch(setLoading());
    }
  }, [isLoading, isFetching, dispatch]);

  // Dispatching success state and data to Redux when data is fetched successfully
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setAIData(data));
      dispatch(resetLoading());
    }
  }, [isSuccess, data, dispatch]);

  // Dispatching error state and error message to Redux when fetching fails
  useEffect(() => {
    if (isError && error instanceof Error) {
      dispatch(setError(error.message));  // Dispatch error message to Redux
      dispatch(resetLoading());
    }
  }, [isError, error, dispatch]);

  // Reset loading state when query is settled (either success or error)
  useEffect(() => {
    if (!isFetching && !isLoading) {
      dispatch(resetLoading());
    }
  }, [isFetching, isLoading, dispatch]);
};

export default useAIData;