export interface InsightSummary {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  }
  
  export interface CategoryDistribution {
    small_talk: number;
    technical_support: number;
    sales_inquiries: number;
    customer_service: number;
  }
  
  export interface ResponseTimes {
    day_wise: { date: string; average_time: number }[];
    week_wise: { week: string; average_time: number }[];
  }
  
  export interface UserSatisfaction {
    ratings: { rating: number; count: number }[];
  }
  
  export interface UsageStatistics {
    by_platform: { iOS: number; Android: number; Web: number };
    by_country: { [key: string]: number };
  }
  
  export interface AIData {
    insight_summary: InsightSummary;
    category_distribution: CategoryDistribution;
    response_times: ResponseTimes;
    user_satisfaction: UserSatisfaction;
    usage_statistics: UsageStatistics;
  }  