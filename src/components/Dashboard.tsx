import { useSelector } from 'react-redux';
import { RootState } from '../store';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import LineChartComponent from './LineChartComponent';
import '../styles/Dashboard.scss';

const Dashboard = () => {
  const { categoryDistribution, responseTimes, userSatisfaction, usageStatistics } = useSelector(
    (state: RootState) => state.aiData
  );

  // Safely handle potential null or undefined values
  const categoryData =
    categoryDistribution &&
    Object.keys(categoryDistribution).map((key) => ({
      category: key,
      count: categoryDistribution[key as keyof typeof categoryDistribution],
    }));

  const dailyResponseData = responseTimes?.day_wise || [];
  const weeklyResponseData = responseTimes?.week_wise || [];
  const satisfactionData = userSatisfaction?.ratings || [];
  const platformUsageData = usageStatistics?.by_platform || {};
  const countryDistributionData = usageStatistics?.by_country || {};

  // Colors for Pie charts
  const pieColors = ['#3b20d6', '#ff7300', '#ffbf00', '#33cc33', '#ff0066'];

  return (
    <div className="dashboard-container">
      <div className="grid">
        {/* Row 1 */}
        {categoryData && (
          <BarChartComponent
            data={categoryData}
            xDataKey="category"
            yDataKey="count"
            title="Category Distribution"
            fillColor="#3b20d6"
          />
        )}
        <LineChartComponent
          data={dailyResponseData}
          xDataKey="date"
          yDataKey="average_time"
          title="Daily Response Time"
          strokeColor="#3b20d6"
        />
        <PieChartComponent
          data={satisfactionData}
          dataKey="count"
          nameKey="rating"
          title="User Satisfaction"
          colors={pieColors}
        />

        {/* Row 2 */}
        <LineChartComponent
          data={weeklyResponseData}
          xDataKey="week"
          yDataKey="average_time"
          title="Weekly Response Time"
          strokeColor="#3b20d6"
        />
        <PieChartComponent
          data={Object.entries(platformUsageData).map(([platform, count]) => ({ platform, count }))}
          dataKey="count"
          nameKey="platform"
          title="Platform Usage"
          colors={pieColors}
        />
        <BarChartComponent
          data={Object.entries(countryDistributionData).map(([country, count]) => ({ country, count }))}
          xDataKey="country"
          yDataKey="count"
          title="Country Distribution"
          fillColor="#3b20d6"
        />
      </div>
    </div>
  );
};

export default Dashboard;
