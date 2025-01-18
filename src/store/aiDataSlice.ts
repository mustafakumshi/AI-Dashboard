import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AIData, CategoryDistribution, ResponseTimes, UserSatisfaction, UsageStatistics, InsightSummary } from '../types/aiData';

interface AiDataState {
  categoryDistribution: CategoryDistribution | null;
  responseTimes: ResponseTimes | null;
  userSatisfaction: UserSatisfaction | null;
  usageStatistics: UsageStatistics | null;
  insightSummary: InsightSummary | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;  
}

const initialState: AiDataState = {
  categoryDistribution: null,
  responseTimes: null,
  userSatisfaction: null,
  usageStatistics: null,
  insightSummary: null,
  isLoading: false,
  isError: false,
  errorMessage: null,  
};

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {
    setAIData: (state, action: PayloadAction<AIData>) => {
      state.categoryDistribution = action.payload.category_distribution;
      state.responseTimes = action.payload.response_times;
      state.userSatisfaction = action.payload.user_satisfaction;
      state.usageStatistics = action.payload.usage_statistics;
      state.insightSummary = action.payload.insight_summary;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = null;  
    },
    setLoading: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;  
    },
    resetLoading: (state) => {
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = action.payload;  
    },
  },
});

export const { setAIData, setLoading, resetLoading, setError } = aiDataSlice.actions;
export default aiDataSlice.reducer;

